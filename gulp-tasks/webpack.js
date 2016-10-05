var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
gutil = require("gulp-util"),
webpack = require("webpack"),
webpackConfig = require("../webpack.config.js"),
stream = require('webpack-stream');

var path = {
	ALL: ['./src/**/*.jsx', './src/**/*.js'],
	DEST_BUILD: 'app/dist/js',
};

gulp.task('webpack', [], function() {
	return gulp.src(path.ALL) // gulp looks for all source files under specified path
	.pipe(sourcemaps.init()) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure
	.pipe(stream(webpackConfig)) // blend in the webpack config into the source files
	.pipe(uglify())// minifies the code for better compression
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.DEST_BUILD))
	.pipe(browserSync.reload({
		stream: true
	}))
});