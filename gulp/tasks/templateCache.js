'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');

gulp.task('templateCache', function() {
  // Process any other view files from app/views
  //return because async and need to signal when done
  //Move template.js to /src/app folder then browserify will slurp it up
  return gulp.src([config.views.src, '!public/views/index.html'])
    .pipe(templateCache({
      standalone: true,
      base: '',
      filename: 'templates.js',
      moduleSystem: 'Browserify'
    }))
    //.pipe(gulp.dest(config.dist.root))
    .pipe(gulp.dest(config.scripts.root));
});