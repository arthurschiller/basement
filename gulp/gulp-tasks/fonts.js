var gulp = require('gulp')
config = require('../config.js');

gulp.task('fonts', function() {
	return gulp.src(config.src + '/fonts/**/*')
	.pipe(gulp.dest(config.dist + '/fonts'))
})