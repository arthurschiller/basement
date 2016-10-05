var gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass');
plumber = require('gulp-plumber'),
browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css'),
autoprefixer = require('gulp-autoprefixer');

var sassPaths = [
	'app/src/scss'
];

var autoprefixerOptions = {
	browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function(){
	return gulp.src('app/src/scss/**/*.scss')
	.pipe(plumber(function(error) {
		gutil.log(gutil.colors.red(error.message));
		this.emit('end');
	}))
	.pipe(sass({ includePaths: sassPaths, errLogToConsole: false }))
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(gulp.dest('app/dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});