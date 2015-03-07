'use strict';

require('angular');
require('angular-ui-router')

//Dependents
var routingConfig = require('../routingConfig');
var access = routingConfig.accessLevels;

var directives = require('./directives');
var services = require('./services');
var controllers = require('./controllers');

var app = angular.module('app.home', [ 'ui.router', services.name, directives.name, controllers.name ]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('user.home', {
    url: '/home',
    templateUrl: '/partials/home/body.html',
    controller: 'HomeCtrl',
    data: {
      access: access.public
    }
  });
});

module.exports = app;
