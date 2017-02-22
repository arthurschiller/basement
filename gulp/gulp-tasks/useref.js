var gulp = require('gulp'),
config = require('../config.js'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css');

gulp.task('useref', function () {
	return gulp.src(config.paths.html)
	.pipe(useref())
	.pipe(gulpif('*.css', cleanCSS({compatibility: 'ie8'})))
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulp.dest(config.dist));
});