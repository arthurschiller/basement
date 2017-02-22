var gulp = require('gulp'),
config = require('../config.js'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css');

gulp.task('useref', function () {
	return gulp.src(config.paths.html)
	.pipe(useref())
	.pipe(gulpif('*.css', minifyCss()))
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulp.dest(config.dist));
});