var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('browserSync', function(){
	browserSync({
		notify: false,
		server: {
			baseDir: 'app'
		},
	})
})