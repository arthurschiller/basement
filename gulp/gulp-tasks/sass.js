const gulp = require('gulp'),
config = require('../config.js'),
gutil = require('gulp-util'),
sass = require('gulp-sass');
plumber = require('gulp-plumber'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
sassModuleImporter = require('sass-module-importer')

gulp.task('sass', function(){
    return gulp.src(config.paths.scss)
    .pipe(sass({
        includePaths: config.sassPaths, 
        importer: sassModuleImporter(),
        errLogToConsole: false 
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixerOptions))
    .pipe(gulp.dest(config.src + '/css'))
    .pipe(sourcemaps.write('maps'))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.src + '/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
})