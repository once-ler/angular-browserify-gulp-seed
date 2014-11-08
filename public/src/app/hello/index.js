'use strict';

// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');

// require controllers ng-module definition
require('./controllers');

// require environment settings
var env = require('../env');

// require a vanilla npm-managed module
var _ = require('lodash');

// a trivial example to use an npm module
//_.forEach(_.keys(env), function (key) {
//  console.log('env[', key, '] = ', env[key]);
//});

// define and export app
var app = module.exports = angular.module('app.hello', [
  'ui.router',
  'app.hello.controllers'
]);

// define app routes
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('hello', {
      url: '/hello',
      templateUrl: env.templatePath('hello/home.html'),
      controller: 'HomeController'
    });

});

module.exports = app;

