'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');
var series = require('stream-series');
var inject = require("gulp-inject");
  
gulp.task('moveViews', function(){

  return gulp.src('public/views/**/*.html')
    .pipe(gulp.dest(config.dist.root));

});

// Views task
gulp.task('views', ['moveViews'], function() {

  // Put our index.html in the dist folder
  //gulp.src('public/views/index.html')

  var vendorPackage = gulp.src([config.dist.root + '/' + config.browserify.vendorBundleName], {read: false});
  var nonVendorPackages = gulp.src([config.dist.root + '/**/*.js', '!' + config.dist.root + '/' + config.browserify.vendorBundleName], {read: false});

  gulp.src(config.dist.root + '/index.html')
    .pipe(inject(series(vendorPackage, nonVendorPackages), {relative: true}))
    .pipe(inject(gulp.src([config.dist.root + '/**/*.css'], {read: false}), {relative: true}))
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  return gulp.src(config.views.src) //, '!public/index.html')
    .pipe(templateCache({
      standalone: true,
      base: ''
    }))
    .pipe(gulp.dest(config.views.dest));

});