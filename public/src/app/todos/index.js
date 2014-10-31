'use strict';

//require('es5-shim');
//require('es5-sham');

require('jquery');
require('angular');
require('angular-ui-router')

//Dependents
var env = require('../env');
var services = require('./service');
var controllers = require('./controller');

var app = angular.module('app.todos', [ 'ui.router', services.name, controllers.name ]);

//app.constant('VERSION', require('../../package.json').version);

//app.config(function($routeProvider) {
app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('todos', {
      url: '/todos',
      templateUrl: env.templatePath('todos/partials/todos.html'),
      controller: 'TodoCtrl'
    })
    .state('imprint', {
      url: '/imprint',
      templateUrl: env.templatePath('todos/partials/imprint.html'),
      controller: 'ImprintCtrl'
    });
});

module.exports = app;
