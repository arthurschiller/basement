var gulp = require('gulp'),
config = require('../config.js'),
cache = require('gulp-cache'),
runSequence = require('run-sequence');

gulp.task('dist', function (callback) {
	runSequence('clean', ['webpack', 'sass'], 'useref', 'copyAssets', callback)
})