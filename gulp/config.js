'use strict';

/**
'public/src/vendor/json-human/css/json.human.css',

'public/src/vendor/slickgrid/slickgrid.css'

'public/src/vendor/slickgrid/lib/jquery.event.drag-2.2.js',
'public/src/vendor/slickgrid/*.js'

'public/src/vendor/crel/crel.js',
      
**/

module.exports = {

  'serverport': 3001,

  'styles': {
    'src' : 'public/scss/app.scss',
    'dest': 'public/dist/css',
    'destName': new Date().setHours(0,0,0,0) + '-app.css',
    'concat': [
      //'public/src/vendor/material-design-lite/material.css',
      //'public/css/material.pink-cyan.min.css',
      'public/src/vendor/ngAnimate/css/ng-animation.css',
      'public/src/vendor/angular-ui-select/dist/select.css',
      'public/src/vendor/handsontable/dist/handsontable.full.css'
    ]
  },

  'scripts': {
    'root': 'public/src/app',
    'src' : 'public/src/app/**/*.js',
    'dest': 'public/dist',
    'concat': [
      'public/src/vendor/material-design-lite/material.js',
      'public/src/vendor/jquery/dist/jquery.js',
      'public/src/vendor/handsontable/dist/handsontable.full.js'
    ],
    'vendorBundleName': new Date().setHours(0,0,0,0) + '-non-brfs-vendor.js'
  },

  'images': {
    'src' : 'public/img/**/*',
    'dest': 'public/dist/img'
  },

  'views': {
    'watch': [
      'public/views/index.html',
      'public/views/partials/**/*.html'
    ],
    'src': 'public/views/**/*.html',
    'dest': 'public/dist/views'
  },

  'dist': {
    'root'  : 'public/dist'
  },

  'browserify': {
    'entries'   : ['./public/src/app/index.js'],
    'bundleName': new Date().setHours(0,0,0,0) + '-app.js',
    'vendorBundleName': new Date().setHours(0,0,0,0) + '-brfs-vendor.js'
  }

};