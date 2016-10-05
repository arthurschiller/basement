var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('watch', ['sass', 'webpack', 'browserSync'], function(){
	gulp.watch("app/*.html").on('change', browserSync.reload);
	gulp.watch('app/src/scss/**/*.scss', ['sass']);
	gulp.watch('app/src/js/**/*.js', ['webpack']);
})