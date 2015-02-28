'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');
var series = require('stream-series');
var inject = require("gulp-inject");
  
gulp.task('moveViews', function(){

  return gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.dest));

});

// Views task
gulp.task('views', ['moveViews'], function() {

  var vendorPackage = gulp.src([config.dist.root + '/' + config.browserify.vendorBundleName], {read: false});
  var nonVendorPackages = gulp.src([config.dist.root + '/**/*.js', '!' + config.dist.root + '/' + config.browserify.vendorBundleName], {read: false});

  gulp.src(config.dist.root + '/views/index.html')
    .pipe(inject(series(vendorPackage, nonVendorPackages), {relative: true}))
    .pipe(inject(gulp.src([config.dist.root + '/**/*.css'], {read: false}), {relative: true}))
    .pipe(gulp.dest(config.views.dest));

  // Process any other view files from app/views
  return gulp.src(config.views.src+ '/**/*.html')//, '!'+config.dist.root + '/views/index.html')
    .pipe(templateCache({
      standalone: true,
      base: ''
    }))
    .pipe(gulp.dest(config.views.dest));

});