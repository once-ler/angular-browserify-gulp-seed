'use strict';

var config     = require('../config');
var gulp       = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var nodeResolve = require('resolve');
var fs = require('fs');
var watchify     = require('watchify');
var gutil        = require('gulp-util');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
//Added ngannotate
var gulpif       = require('gulp-if');
var ngAnnotate   = require('browserify-ngannotate');
var streamify    = require('gulp-streamify');
var uglify       = require('gulp-uglify');
var babel = require('babelify');

var production = global.isProd; //(process.env.NODE_ENV === 'production');
var multiBundlesHelper = require('../util/multiBundlesHelper'); 

gulp.task('build-app', function () {

  //var b = browserify('./public/src/app/index.js', {
    // generate source maps in non-production environment
    //debug: !!production
  //});
  var b = browserify(config.browserify.entries, {
    //entries: config.browserify.entries,
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: !!production
  })
  .transform(babel, {presets: ["es2015", "stage-0"]});

  if ( !production ) {
    b = watchify(b);
    b.on('update', function() {
      rebundle();
    });
  }

  // mark vendor libraries defined in bower.json as an external library,
  // so that it does not get bundled with app.js.
  // instead, we will load vendor libraries from vendor.js bundle
  multiBundlesHelper.getBowerPackageIds().forEach(function (lib) {
    b.external(lib);
  });

  // do the similar thing, but for npm-managed modules.
  // resolve path using 'resolve' module
  multiBundlesHelper.getNPMPackageIds().forEach(function (id) {
    b.external(id);
  });

  //Before bundle(), transform()
  b.transform(ngAnnotate);

  function rebundle(){

    gutil.log('Rebundle...');
    var stream = b.bundle();

    return stream
      .on('error', handleErrors)
      .pipe(source(config.browserify.bundleName))
      .pipe(gulpif(!!production, streamify(uglify()))) //test uglify, force true
      .pipe(gulp.dest(config.dist.root))
      .pipe(browserSync.reload({ stream: true, once: true }));
    
    /*
    stream
      .on('error', handleErrors)
      .pipe(source(config.browserify.bundleName));

    // pipe additional tasks here (for eg: minifying / uglifying, etc)
    // remember to turn off name-mangling if needed when uglifying

    stream
      .pipe(gulpif(!!production, streamify(uglify()))) //test uglify, force true
      .pipe(gulp.dest(config.dist.root));

    stream
      .pipe(browserSync.reload({ stream: true, once: true }));

    return stream;
    */
    
  }

  return rebundle();

});