'use strict';

var gulp = require('gulp');
var markdown = require('gulp-markdown');
var addsrc = require('gulp-add-src');
var fileinclude = require('gulp-file-include');
var insert = require('gulp-insert');
var replace = require('gulp-replace');

gulp.task('default',["mdtohtml"], function () {
    return gulp.src(['pages/**/*.html'])
        .pipe(insert.prepend('@@include("./template/header.html")\n'))
        .pipe(insert.append('\n@@include("./template/footer.html")'))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './'
        }))
        .pipe(replace('.md','.html'))
        .pipe(gulp.dest('css-page'));
});
gulp.task('mdtohtml', function () {
    return gulp.src('css/**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('pages'));
});
