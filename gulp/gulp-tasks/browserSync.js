var gulp = require('gulp'),
config = require('../config.js'),
browserSync = require('browser-sync');

gulp.task('browserSync', function(){
	browserSync({
		notify: false,
		server: {
			baseDir: config.src
		},
	})
})