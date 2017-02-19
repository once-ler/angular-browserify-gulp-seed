// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');

// require controllers ng-module definition
require('./controllers');

//var _ = require('lodash');

//Dependents
import routingConfig from '../routingConfig';

const access = routingConfig.accessLevels;

// define and export app
const app = module.exports = angular.module('app.login', [
  'ui.router',
  'app.login.controllers'
]);

// define app routes
app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('anon.login', {
      url: '/login/',
      templateUrl: '/partials/login/login.html', //allow the template from express views
      controller: 'LoginCtrl'
    }
  );
});

export default app;

