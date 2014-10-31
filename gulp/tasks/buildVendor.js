'use strict';

var config     = require('../config');
var gulp       = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var nodeResolve = require('resolve');
var fs = require('fs');
//Added ngannotate
var gulpif       = require('gulp-if');
//var ngAnnotate   = require('browserify-ngannotate');
var streamify    = require('gulp-streamify');
var uglify       = require('gulp-uglify');

var production = global.isProd; //(process.env.NODE_ENV === 'production');
var multiBundlesHelper = require('../util/multiBundlesHelper'); 

gulp.task('build-vendor', function () {

  // this task will go through ./bower.json and
  // uses bower-resolve to resolve its full path.
  // the full path will then be added to the bundle using require()

  var b = browserify({
    // generate source maps in non-production environment
    debug: !!production
  });

  // get all bower components ids and use 'bower-resolve' to resolve
  // the ids to their full path, which we need for require()
  multiBundlesHelper.getBowerPackageIds().forEach(function (id) {

    var resolvedPath = bowerResolve.fastReadSync(id);
    var fstream = fs.createReadStream(resolvedPath);
    //resolvedPath
    b.require(fstream, {
    //b.require(resolvedPath, {

      // exposes the package id, so that we can require() from our code.
      // for eg:
      // require('./vendor/angular/angular.js', {expose: 'angular'}) enables require('angular');
      // for more information: https://github.com/substack/node-browserify#brequirefile-opts
      expose: id

    });
  });

  // do the similar thing, but for npm-managed modules.
  // resolve path using 'resolve' module
  multiBundlesHelper.getNPMPackageIds().forEach(function (id) {
    b.require(nodeResolve.sync(id), { expose: id });
  });

  var stream = b.bundle().pipe(source(config.browserify.vendorBundleName));

  // pipe additional tasks here (for eg: minifying / uglifying, etc)
  // remember to turn off name-mangling if needed when uglifying

  stream
    .pipe(gulpif(!!production, streamify(uglify()))) //test uglify, force true
    .pipe(gulp.dest(config.dist.root));

  return stream;
});
