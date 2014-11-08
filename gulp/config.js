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
    'src' : 'public/images/**/*',
    'dest': 'public/dist/images'
  },

  'views': {
    'src': [
      'public/src/index.html',
      'public/partials/**/*.html'
    ],
    'dest': 'public/src/app'
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