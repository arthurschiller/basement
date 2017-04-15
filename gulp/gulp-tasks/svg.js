var gulp = require('gulp'),
config = require('../config.js'),
svgSprite = require('gulp-svg-sprite');

var svgSpriteConfig = {
	mode: {
		symbol: {
			dest: '',
			sprite: 'svg_spritesheet.svg'
		}
	}
};

gulp.task('svg', function () {
	return gulp.src(config.paths.svg)
	.pipe(svgSprite(svgSpriteConfig))
	.pipe(gulp.dest(config.src + '/svg'));
});

gulp.task('copySVG', function() {
	return gulp.src(config.src + '/svg/svg_spritesheet.svg')
	.pipe(gulp.dest(config.dist + '/svg'))
})