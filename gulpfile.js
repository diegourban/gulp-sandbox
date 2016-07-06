const gulp = require('gulp');

const paths = {
  dist: './dist/',
  entry: './index.js',
  src: [
    'src/**/*.js'
  ],
};

gulp.task('hello', function(){
	console.log('Hello Gulp!');
});

gulp.task('default', ['hello']);