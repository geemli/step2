var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('gulp-main-bower-files');
var del = require('del');
var es = require('event-stream');

gulp.task('pack-vendor-js', ['clean'], function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles( ))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('./public'));
});

gulp.task('pack-my-js', ['clean'], function() {
    return gulp.src(['./src/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('pack-css', ['clean'], function() {
    return gulp.src('./src/*.css')
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('copy', ['pack-vendor-js', 'pack-my-js', 'pack-css'], function() {
    return gulp.src(['./src/*.html', '!./src/index.html'])
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['inject']);

gulp.task('clean',function() {
    del(['public']);
});

gulp.task('inject', ['copy'],  function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(['./public/*.js'])))
        .pipe(inject(gulp.src(['./public/*.css'])))
        .pipe(gulp.dest('./public'));
});