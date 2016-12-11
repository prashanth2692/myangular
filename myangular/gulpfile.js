var gulp = require("gulp");

//include plugins
var jshint = require('gulp-jshint');

gulp.task('default', function(){
  //somthing goes here
})

gulp.task('jshint', function(){
  gulp.src('./src/hello.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
})

gulp.task('jshint-watch', function(){
  gulp.watch('src/*.js', ['jshint'])
})