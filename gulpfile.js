//## setup
var gulp = require('gulp'),
	requireDir = require('require-dir'),
	runSequence = require('run-sequence');

requireDir('./gulp-tasks');

//## Default task
gulp.task('default', function(callback) {
	runSequence(['webpack', 'sass', 'watch'],
		callback
	)
})