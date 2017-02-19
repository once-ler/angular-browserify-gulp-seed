require('angular');
require('angular-ui-router')

//Dependents
import routingConfig from '../routingConfig';

const access = routingConfig.accessLevels;

import directives from './directives';
import services from './services';
import controllers from './controllers';

const app = angular.module('app.home', [ 'ui.router', services.name, directives.name, controllers.name ]);

app.config(($stateProvider, $urlRouterProvider) => {
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

export default app;
