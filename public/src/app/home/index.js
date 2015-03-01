'use strict';

require('angular');
require('angular-ui-router')

//Dependents
var routingConfig = require('../routingConfig');
var access = routingConfig.accessLevels;

var services = require('./directives');

var app = angular.module('app.home', [ 'ui.router', services.name ]);

//app.config(function ($stateProvider, $urlRouterProvider) {
  //no op  
//});

module.exports = app;
