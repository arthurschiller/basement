var gulp = require('gulp'),
config = require('../config.js'),
cache = require('gulp-cache'),
del = require('del');

gulp.task('clean', function(callback) {
	del.sync(config.dist);
	return cache.clearAll(callback);
})