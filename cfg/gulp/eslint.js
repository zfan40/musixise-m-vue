"use strict";

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var path = require('path');

gulp.task('eslint:src', function() {
    var src = [
        './src/**/*.js',
        '!./src/**/mock/**/*.js',
        '!./src/**/test/**/*.js'
    ];
    return gulp.src(src)
        .pipe(eslint(path.join(__dirname, '../eslintrc-src')))
        .pipe(eslint.format());
});

gulp.task('eslint:test', function() {
    var src = [
        './src/**/test/**/*.js'
    ];
    return gulp.src(src)
        .pipe(eslint(path.join(__dirname, '../eslintrc-test')))
        .pipe(eslint.format());
});
