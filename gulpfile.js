var gulp         = require('gulp');
var connect      = require('gulp-connect-php');

gulp.task('connect', function() {
  connect.server({
    hostname: '127.0.0.1',
    port: 8000,
    open: true
  });
});

gulp.task('default', ['connect'], function() {});
