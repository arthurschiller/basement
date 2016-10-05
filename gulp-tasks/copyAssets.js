var gulp = require('gulp'),
runSequence = require('run-sequence');

gulp.task('copyAssets', function(callback) {
	runSequence('fonts', 'images', 'copySVG', 'additionalScripts'),
	callback
})
