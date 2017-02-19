// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');
require('./controllers');

import _ from 'lodash';
import routingConfig from '../routingConfig';

const access = routingConfig.accessLevels;

// define and export app
const app = module.exports = angular.module('app.hello', [
  'ui.router',
  'app.hello.controllers'
]);

// define app routes
app.config(($stateProvider, $urlRouterProvider) => {
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

export default app;

