'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'public/less/app.less',
    'dest': 'public/dist/css',
    'destName': new Date().setHours(0,0,0,0) + '-app.css'
  },

  'scripts': {
    'src' : 'public/src/app/**/*.js',
    'dest': 'public/dist'
  },

  'images': {
    'src' : 'public/images/**/*',
    'dest': 'public/dist/images'
  },

  'views': {
    'watch': [
      'public/index.html',
      'public/partials/**/*.html'
    ],
    'src': 'public/partials/**/*.html',
    'dest': 'public/dist'
  },

  'dist': {
    'root'  : 'public/dist'
  },

  'browserify': {
    'entries'   : ['./public/src/app/index.js'],
    'bundleName': new Date().setHours(0,0,0,0) + '-app.js',
    'vendorBundleName': new Date().setHours(0,0,0,0) + '-vendor.js'
  }

};