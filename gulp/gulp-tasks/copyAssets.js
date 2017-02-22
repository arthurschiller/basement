var gulp = require('gulp'),
config = require('../config.js'),
runSequence = require('run-sequence');

gulp.task('copyAssets', function(callback) {
	runSequence('fonts', 'images', 'copySVG'),
	callback
})