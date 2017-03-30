var gulp = require('gulp'),
    connect = require('gulp-connect')

gulp.task('webserver', function() {
  connect.server({
    root: ['.'],
    port: 1234
  });
});


gulp.task('default', ['webserver'], function(){
  
});
