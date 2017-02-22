var gulp = require('gulp'),
config = require('../config.js');

gulp.task('images', function() {
	return gulp.src(config.src + '/images/**/*')
	.pipe(gulp.dest(config.dist + '/images'))
})