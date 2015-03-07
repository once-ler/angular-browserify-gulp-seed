'use strict';

// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');

// require controllers ng-module definition
require('./controllers');

// require environment settings
//var env = require('../env');

// require a vanilla npm-managed module
var _ = require('lodash');

// a trivial example to use an npm module
//_.forEach(_.keys(env), function (key) {
//  console.log('env[', key, '] = ', env[key]);
//});

//Dependents
var routingConfig = require('../routingConfig');
var access = routingConfig.accessLevels;

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
      templateUrl: '/partials/hello/home.html',
      controller: 'HelloController',
      data: {
        access: access.public
      }
    });

});

module.exports = app;

