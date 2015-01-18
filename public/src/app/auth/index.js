'use strict';

require('angular');
require('angular-ui-router')

var services = require('./services');
var controllers = require('./controllers');
var directives = require('./directives');

var app = angular.module('app.auth', [ 'ui.router', services.name, controllers.name, directives.name ]);

/*
app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('todos', {
      url: '/todos',
      templateUrl: 'todos/todos.html',
      controller: 'TodoCtrl'
    })
    .state('imprint', {
      url: '/imprint',
      templateUrl: 'todos/imprint.html',
      controller: 'ImprintCtrl'
    });
});
*/

module.exports = app;
