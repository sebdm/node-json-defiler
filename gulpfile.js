var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

gulp.task('clean', function () {
  return gulp.src(['node_modules'], {read: false})
    .pipe(rimraf())
});
