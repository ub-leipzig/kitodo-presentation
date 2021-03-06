<?php
/**
 * (c) Kitodo. Key to digital objects e.V. <contact@kitodo.org>
 *
 * This file is part of the Kitodo and TYPO3 projects.
 *
 * @license GNU General Public License version 3 or later.
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 */

/**
 * Update class 'ext_update' for the 'dlf' extension.
 *
 * @author	Sebastian Meyer <sebastian.meyer@slub-dresden.de>
 * @package	TYPO3
 * @subpackage	tx_dlf
 * @access	public
 */
class ext_update {

	/**
	 * This holds the output ready to return
	 *
	 * @var	string
	 * @access protected
	 */
	protected $content = '';

	/**
	 * Triggers the update option in the extension manager
	 *
	 * @access	public
	 *
	 * @return	boolean		Should the update option be shown?
	 */
	public function access() {

		if (count($this->getMetadataConfig())) {

			return TRUE;

		}

		return FALSE;

	}

	/**
	 * Get all outdated metadata configuration records
	 *
	 * @access	protected
	 *
	 * @return	array		Array of UIDs of outdated records
	 */
	protected function getMetadataConfig() {

		$uids = array ();

		// check if tx_dlf_metadata.xpath exists anyhow
		$fieldsInDatabase = $GLOBALS['TYPO3_DB']->admin_get_fields('tx_dlf_metadata');

		if (! in_array('xpath', array_keys($fieldsInDatabase))) {

			return $uids;

		}

		// Get all records with outdated configuration.
		$result = $GLOBALS['TYPO3_DB']->exec_SELECTquery(
			'tx_dlf_metadata.uid AS uid',
			'tx_dlf_metadata',
			'tx_dlf_metadata.format=0 AND NOT tx_dlf_metadata.xpath=\'\''.tx_dlf_helper::whereClause('tx_dlf_metadata'),
			'',
			'',
			''
		);

		if ($GLOBALS['TYPO3_DB']->sql_num_rows($result)) {

			while ($resArray = $GLOBALS['TYPO3_DB']->sql_fetch_assoc($result)) {

				$uids[] = intval($resArray['uid']);

			}

		}

		return $uids;

	}

	/**
	 * The main method of the class
	 *
	 * @access	public
	 *
	 * @return	string		The content that is displayed on the website
	 */
	public function main() {

		// Load localization file.
		$GLOBALS['LANG']->includeLLFile('EXT:dlf/locallang.xml');

		// Update the metadata configuration.
		$this->updateMetadataConfig();

		return $this->content;

	}

	/**
	 * Update all outdated metadata configuration records
	 *
	 * @access	protected
	 *
	 * @return	void
	 */
	protected function updateMetadataConfig() {

		$metadataUids = $this->getMetadataConfig();

		if (!empty($metadataUids)) {

			$data = array ();

			// Get all old metadata configuration records.
			$result = $GLOBALS['TYPO3_DB']->exec_SELECTquery(
				'tx_dlf_metadata.uid AS uid,tx_dlf_metadata.pid AS pid,tx_dlf_metadata.cruser_id AS cruser_id,tx_dlf_metadata.encoded AS encoded,tx_dlf_metadata.xpath AS xpath,tx_dlf_metadata.xpath_sorting AS xpath_sorting',
				'tx_dlf_metadata',
				'tx_dlf_metadata.uid IN ('.implode(',', $metadataUids).')'.tx_dlf_helper::whereClause('tx_dlf_metadata'),
				'',
				'',
				''
			);

			while ($resArray = $GLOBALS['TYPO3_DB']->sql_fetch_assoc($result)) {

				$newId = uniqid('NEW');

				// Copy record to new table.
				$data['tx_dlf_metadataformat'][$newId] = array (
					'pid' => $resArray['pid'],
					'cruser_id' => $resArray['cruser_id'],
					'parent_id' => $resArray['uid'],
					'encoded' => $resArray['encoded'],
					'xpath' => $resArray['xpath'],
					'xpath_sorting' => $resArray['xpath_sorting']
				);

				// Add reference to old table.
				$data['tx_dlf_metadata'][$resArray['uid']]['format'] = $newId;

			}

			if (!empty($data)) {

				// Process datamap.
				$substUids = tx_dlf_helper::processDBasAdmin($data);

				unset ($data);

				if (!empty($substUids)) {

					$message = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
						'TYPO3\\CMS\\Core\\Messaging\\FlashMessage',
						$GLOBALS['LANG']->getLL('update.metadataConfigOkay', TRUE),
						$GLOBALS['LANG']->getLL('update.metadataConfig', TRUE),
						\TYPO3\CMS\Core\Messaging\FlashMessage::OK,
						FALSE
					);

				} else {

					$message = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
						'TYPO3\\CMS\\Core\\Messaging\\FlashMessage',
						$GLOBALS['LANG']->getLL('update.metadataConfigNotOkay', TRUE),
						$GLOBALS['LANG']->getLL('update.metadataConfig', TRUE),
						\TYPO3\CMS\Core\Messaging\FlashMessage::WARNING,
						FALSE
					);

				}

				$this->content .= $message->render();

			}

		}

	}

}

if (defined('TYPO3_MODE') && $TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/dlf/class.ext_update.php'])	{
	include_once($TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/dlf/class.ext_update.php']);
}
