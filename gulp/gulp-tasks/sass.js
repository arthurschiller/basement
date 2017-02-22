var gulp = require('gulp'),
config = require('../config.js'),
gutil = require('gulp-util'),
sass = require('gulp-sass');
plumber = require('gulp-plumber'),
browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
autoprefixer = require('gulp-autoprefixer'),
sassModuleImporter = require('sass-module-importer');

gulp.task('sass', function(){
	return gulp.src(config.paths.scss)
	.pipe(sass({
		includePaths: config.sassPaths, 
		importer: sassModuleImporter(),
		errLogToConsole: false 
	}))
	.pipe(autoprefixer(config.autoprefixerOptions))
	.pipe(gulp.dest(config.src + '/compiled/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});