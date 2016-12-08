var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	htmlReplace = require('gulp-html-replace'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin')
	cssmin = require('gulp-cssmin');

gulp.task('default', ['copy'], function() {
	gulp.start('build-img', 'usemin');
});

gulp.task('clean', function() {
	return gulp.src('dist').pipe(clean());
});

gulp.task('copy', ['clean'], function() {
	return gulp.src('src/**/*').pipe(gulp.dest('dist'));
});

gulp.task('build-img', function() {
	gulp.src('dist/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

// deprecated, use usemin
gulp.task('build-js', function() {
	gulp.src(['dist/js/jquery.js', 'dist/js/home.js', 'dist/js/produto.js'])
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// deprecated, use usemin
gulp.task('build-html', function() {
	gulp.src('dist/**/*.html')
		.pipe(htmlReplace({
			js: 'js/all.js'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('usemin', function() {
	gulp.src('dist/**/*.html')
		.pipe(usemin({
			'js' : [uglify],
			'css' : [cssmin]
		}))
		.pipe(gulp.dest('dist'));
});