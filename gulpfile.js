var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    browserify = require('browserify'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    embedlr = require('gulp-embedlr'),
    jsValidate = require('gulp-jsvalidate'),
    source = require('vinyl-source-stream'),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    streamify = require('gulp-streamify'),
    buffer = require('vinyl-buffer'),
    exorcist = require('exorcist'),
    notify = require('gulp-notify'),
    runSequence = require('run-sequence').use(gulp),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
    es6: ['dlf/**/*.js'],
    es5: 'dist/resources',
    sourceRoot: path.join(__dirname, 'es6'),
    bundleDir: "dist",
    bundleName: "kitodo-pageview",
    docDir: "doc"
};

gulp.task('babel', function() {
    return gulp.src(paths.es6)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(sourcemaps.write('.', {sourceRoot: paths.sourceRoot}))
        .pipe(gulp.dest(paths.es5));
});

gulp.task('watch', function() {
    gulp.watch(paths.es6, ['babel']);
});

gulp.task('default', ['watch']);

gulp.task('browserifyWithDeps', function() {
    var bundler = browserify({entries: ["./src/entry.js"], standalone: "kitodo-pageview", debug: true});

    return bundler
        .bundle()
        .pipe(exorcist(paths.bundleDir + '/' + paths.bundleName + '.js.map'))
        .pipe(source(paths.bundleName + '.js'))
        .pipe(gulp.dest(paths.bundleDir))
        .pipe(rename(paths.bundleName + '.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true,
            debug: true,
        }))
        .pipe(uglify({
            compress: {
                negate_iife: false,
                sequences: false
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.bundleDir));
});

gulp.task('browserify', function() {
    runSequence('browserifyWithDeps', 'makeBundledCopy');
});

gulp.task('makeBundledCopy', function() {
    gulp.src(paths.bundleDir + '/' + paths.bundleName + '.min.js')
        .pipe(rename(paths.bundleName + '.bundled.min.js'))
        .pipe(gulp.dest(paths.bundleDir));
    gulp.src(paths.bundleDir + '/' + paths.bundleName + '.js')
        .pipe(rename(paths.bundleName + '.bundled.js'))
        .pipe(gulp.dest(paths.bundleDir));
});

gulp.task('browserifyForDebug', function() {
    var bundler = browserify({entries: ["./src/entry.js"], standalone: "kitodo-pageview", debug: true});

    return bundler
        .bundle()
        .on("error", notify.onError(function(error) {
            return error.message;
        }))
        .pipe(source(paths.bundleName + '.min.js'))
        .pipe(embedlr())
        .pipe(gulp.dest(paths.bundleDir))
        .pipe(connect.reload());
});
