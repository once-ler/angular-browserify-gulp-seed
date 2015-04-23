'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var series = require('stream-series');
var inject = require("gulp-inject");
  
gulp.task('moveViews', function(){

  return gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.dest));

});

// Views task
gulp.task('views', ['moveViews'], function() {
  
  /**
    gulp-inject
  **/
  var browserifyVendorPackage = gulp.src([config.dist.root + '/' + config.browserify.vendorBundleName], {read: false});
  var nonBrowserifyVendorPackage = gulp.src([config.dist.root + '/' + config.scripts.vendorBundleName], {read: false});
  var nonVendorPackages = gulp.src([config.dist.root + '/**/*.js', '!' + config.dist.root + '/{' + config.browserify.vendorBundleName + ',' + config.scripts.vendorBundleName + '}' ], {read: false});
  
  gulp.src(config.dist.root + '/views/index.html')
    .pipe(inject(series(nonBrowserifyVendorPackage, browserifyVendorPackage, nonVendorPackages), {relative: true}))
    .pipe(inject(gulp.src([config.dist.root + '/**/*.css'], {read: false}), {relative: true}))
    .pipe(gulp.dest(config.views.dest));
  
});