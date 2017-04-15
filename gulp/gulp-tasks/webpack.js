var gulp = require('gulp'),
config = require('../config.js'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
gutil = require("gulp-util"),
webpack = require("webpack"),
webpackConfig = require("../../webpack.config.js"),
stream = require('webpack-stream');

gulp.task('webpack', function() {
	return gulp.src([config.paths.js, config.paths.jsx])
	.pipe(sourcemaps.init())
	.pipe(stream(webpackConfig))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(config.src + '/js'))
	.pipe(browserSync.reload({
		stream: true
	}))
});