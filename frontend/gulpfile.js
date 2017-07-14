var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('gulp-main-bower-files');



gulp.task("uglify", function(){
	var target = gulp.src('./src/index.html');
	var sources = gulp.src('./public/app.min.js');
	
	return gulp.src('./bower.json')
        .pipe(mainBowerFiles( ))
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest('./public'))
		.pipe(target.pipe(inject(sources)))
			.pipe(gulp.dest('./public'));
});

gulp.task("uglify2", function(){
	return gulp.src('./bower.json')
        .pipe(mainBowerFiles( ))
        .pipe(uglify())
        .pipe(concat("app2.min.js"))
        .pipe(gulp.dest('./public'))
});

gulp.task('default', ['uglify', 'uglify2']);