var gulp = require('gulp'),
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
	return gulp.src('app/src/svg/src/*.svg')
	.pipe(svgSprite(svgSpriteConfig))
	.pipe(gulp.dest('app/dist/svg'));
});

gulp.task('copySVG', function() {
	return gulp.src('app/src/svg/svg_spritesheet.svg')
	.pipe(gulp.dest('app/dist/svg'))
})