// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('uglify', function(){
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles( ))
        .pipe(uglify())
		.pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/dist'));
});


 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('bower_components/angular/*.js')
      .pipe(concat('helloworld.js'))
      .pipe(gulp.dest('build/js'));
});
 // Default Task
gulp.task('default', ['uglify']);
