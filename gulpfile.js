var gulp = require('gulp'),
    watch = require('gulp-watch'),
    plumb = require('gulp-plumber'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename');

gulp.task('tss', function () {
    watch('app/styles-src/*.js')
        .pipe(plumb())
        .pipe(replace(/.*?\{/m, ''))
        .pipe(replace(/}\s*;/, ''))
        .pipe(rename({extname: '.tss'}))
        .pipe(gulp.dest('app/styles/'))
    ;
});