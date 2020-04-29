// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

// Where your sass files are located
const srcDir = './src/css';
// Where your CSS files will be generated
const dstDir = './src/css';


gulp.task('sass', function(cb) {
  gulp
    .src(`${srcDir}/*.scss`)
    .pipe(sass())
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  'default',
    gulp.series('sass', function(cb) {
    gulp.watch(`${dstDir}/*.scss`, gulp.series('sass'));
    cb();
  })
); 

gulp.task('watch', function(){
  gulp.watch(`${srcDir}/*.scss`, gulp.series('sass'));
})