var gulp = require('gulp');

gulp.task('images', function() {
	return gulp.src('app/src/images/**/*')
	.pipe(gulp.dest('app/dist/images'))
})