'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var less = require('gulp-less');  
var path = require('path');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var rename = require("gulp-rename");
var del    = require('del');
var runSequence = require('run-sequence');

gulp.task('processLess', function() {
  return gulp.src(config.styles.src)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});

gulp.task('renameCss', function() {
  return gulp.src(config.styles.dest + '/app.css')
          .pipe(rename(config.styles.destName))
          .pipe(gulp.dest(config.styles.dest));
});

gulp.task('cleanCss', function(){
  return del(config.styles.dest + '/app.css');
});

gulp.task('styles', function (cb) {    
  runSequence('processLess', 'renameCss', 'cleanCss', cb);
});