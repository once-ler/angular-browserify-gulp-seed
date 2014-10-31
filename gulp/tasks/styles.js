'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var less = require('gulp-less');  
var path = require('path');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('styles', function () {  
  return gulp.src(config.styles.src)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});