var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

gulp.task('clean', function () {
  return gulp.src(['node_modules', 'multislot.js', 'test/browser/build'], {read: false})
    .pipe(rimraf())
});
