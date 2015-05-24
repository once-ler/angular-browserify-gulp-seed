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
    'src' : 'public/less/app.less',
    'dest': 'public/dist/css',
    'destName': new Date().setHours(0,0,0,0) + '-app.css',
    'concat': [
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
      'public/src/vendor/jquery/dist/jquery.js',
      'public/src/vendor/handsontable/dist/handsontable.full.js',
      'public/src/vendor/d3/d3.js',
      'public/src/vendor/crossfilter/crossfilter.js',
      'public/src/vendor/dcjs/dc.js'      
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