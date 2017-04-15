var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
	gulp.src(config.src + '/js/**/*')
		.pipe(modernizr())
		.pipe(gulp.dest(config.src + '/js/vendor'))
});