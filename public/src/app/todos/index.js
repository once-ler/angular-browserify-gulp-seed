//require('es5-shim');
//require('es5-sham');

//require('jquery');
require('angular');
require('angular-ui-router')

//Dependents
import routingConfig from '../routingConfig';

const access = routingConfig.accessLevels;

//var env = require('../env');
import services from './service';

import controllers from './controller';

const app = angular.module('app.todos', [ 'ui.router', services.name, controllers.name ]);

//app.constant('VERSION', require('../../package.json').version);

//app.config(function($routeProvider) {
app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('todos', {
      url: '/todos',
      templateUrl: '/partials/todos/todos.html',
      controller: 'TodoCtrl',
      data: {
        access: access.public
      }
    })
    //Testing authorization
    .state('imprint', {
      url: '/imprint',
      templateUrl: '/partials/todos/imprint.html',
      controller: 'ImprintCtrl',
      data: {
        access: access.user
      }
    });
});

export default app;
