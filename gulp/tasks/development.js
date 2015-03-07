'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  /**
    browserify runs AFTER templateCache
    browserify runs BEFORE views
  **/
  runSequence('styles', 'images', 'templateCache', 'browserify', 'views', 'watch', cb);

});