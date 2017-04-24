const gulp = require('gulp'),
config = require('../config.js'),
browserSync = require('browser-sync')

gulp.task('watch', ['sass', 'webpack', 'browserSync'], function(){
	gulp.watch(config.src + '/**/*.html').on('change', browserSync.reload)
	gulp.watch(config.paths.scss, ['sass'])
	gulp.watch(config.paths.js, ['webpack'])
})