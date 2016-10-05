var gulp = require('gulp'),
cache = require('gulp-cache'),
del = require('del');

gulp.task('clean', function(callback) {
	del('dist');
	return cache.clearAll(callback);
})