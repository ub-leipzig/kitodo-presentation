"use strict";

/**
 * (c) Kitodo. Key to digital objects e.V. <contact@kitodo.org>
 *
 * This file is part of the Kitodo and TYPO3 projects.
 *
 * @license GNU General Public License version 3 or later.
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 */

$("#tx-dlf-search-query").attr({
	'autocomplete': "off",
	'role': "textbox",
	'aria-autocomplete': "list",
	'aria-haspopup': "true"
});

$(function () {
	// jQuery autocomplete integration
	$("#tx-dlf-search-query").autocomplete({
		source: function source(request, response) {
			return $.post("/", {
				eID: "tx_dlf_search_suggest",
				q: encodeURIComponent(request.term.toLowerCase()),
				encrypted: $("input[name='tx_dlf[encrypted]']").val(),
				hashed: $("input[name='tx_dlf[hashed]']").val()
			}, function (data) {
				var result = [];
				var option = "";
				$("arr[name='suggestion'] str", data).each(function (i) {
					option = $(this).text();
					option = option.replace(/(\?|!|:)/g, "\\\$1");
					result.push(option);
				});
				return response(result);
			}, "xml");
		},
		minLength: 3,
		appendTo: "#tx-dlf-search-suggest"
	});
});
//# sourceMappingURL=tx_dlf_search_suggest.js.map
