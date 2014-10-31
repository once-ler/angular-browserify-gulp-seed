'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'public/less/app.less',
    'dest': 'public/dist/css'
  },

  'scripts': {
    'src' : 'public/src/app/**/*.js',
    'dest': 'public/dist'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'views': {
    'src': [
      'public/src/index.html',
      'public/src/app/**/*.html'
    ],
    'dest': 'public/dist'
  },

  'dist': {
    'root'  : 'public/dist'
  },

  'browserify': {
    'entries'   : ['./public/src/app/index.js'],
    'bundleName': 'app.js',
    'vendorBundleName': 'vendor.js'
  }

};