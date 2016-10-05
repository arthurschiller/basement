var gulp = require('gulp'),
cache = require('gulp-cache'),
runSequence = require('run-sequence');

gulp.task('build', function(callback) {
	runSequence('clean', 
		['sass'],
		['useref'],
		'copyAssets',
		callback
		)
})

gulp.task('clean', function(callback) {
	del('dist');
	return cache.clearAll(callback);
})