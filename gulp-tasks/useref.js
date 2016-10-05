var gulp = require('gulp'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css');

gulp.task('useref', function () {
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpif('*.css', minifyCss()))
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulp.dest('dist'));
});