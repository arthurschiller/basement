var gulp = require('gulp'),
	sass = require('gulp-sass');
	browserSync = require('browser-sync'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    del = require('del'),
    runSequence = require('run-sequence');


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
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});


// Copy Fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


// Clean
gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
})

gulp.task('clean:dist', function(callback) {
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});


// Build
gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'fonts'],
    callback
  )
})