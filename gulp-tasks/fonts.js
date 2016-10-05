var gulp = require('gulp');

gulp.task('fonts', function() {
	return gulp.src('app/src/fonts/**/*')
	.pipe(gulp.dest('app/dist/fonts'))
})