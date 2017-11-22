const gulp = require('gulp'),
config = require('../config.js'),
sourcemaps = require('gulp-sourcemaps'),
gutil = require('gulp-util'),
minify = require('gulp-minify'),
webpack = require('webpack'),
webpackStream = require('webpack-stream'),
webpackConfig = require("../../webpack.config.js")

gulp.task('webpack', function() {
	return gulp.src([config.paths.js, config.paths.jsx])
	.pipe(webpackStream(webpackConfig, webpack))
	.pipe(sourcemaps.init())
		.pipe(gulp.dest(config.src + '/js'))
		.pipe(minify({
			preserveComments: 'some'
		}))
		.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest(config.src + '/js'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

gulp.task('compress', function (cb) {
  pump([
      gulp.src('lib/*.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});