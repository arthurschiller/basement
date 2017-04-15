'use strict';

var gulp = require('gulp'),
requireDir = require('require-dir'),
runSequence = require('run-sequence'),
plumber = require('gulp-plumber'),
gutil = require('gulp-util');

requireDir('./gulp/gulp-tasks');

//## Default task
gulp.task('default', function(callback) {
	runSequence(['webpack', 'sass', 'watch', 'modernizr'], callback)
})

gulp.task('dev', ['default'])

// ## Error handling
var gulp_src = gulp.src;

gulp.src = function() {
	return gulp_src.apply(gulp, arguments)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
			this.emit('end');
		})
	);
};