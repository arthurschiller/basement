/* 
/// For easy understanding this gulpfile is mainly based on this tutorial: https://css-tricks.com/gulp-for-beginners ///
*/

// load our plugins
var gulp = 			require('gulp'),
	sass = 			require('gulp-sass');
	browserSync = 	require('browser-sync'),
	useref = 		require('gulp-useref'),
	gulpif = 		require('gulp-if'),
    uglify = 		require('gulp-uglify'),
    minifyCss = 	require('gulp-minify-css'),
    cache =			require('gulp-cache'),
    del = 			require('del'),
    runSequence = 	require('run-sequence');


// Compile SASS, start server, browser sync
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})


// Minify JS & CSS
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});


// Copy fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

// Copy images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
  .pipe(gulp.dest('dist/images'))
})

gulp.task('copyAssets', function(callback) {
  runSequence('fonts', 'images'),
  callback
})


// Clean dist
gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
})


// Build tasks
gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence('clean', 
    ['sass', 'useref'],
    'copyAssets',
    callback
  )
})