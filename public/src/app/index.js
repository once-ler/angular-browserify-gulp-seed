// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');
require('angular-material-design-lite');

import templates from './templates';
import directives from './directives';
import controllers from './controllers';
import services from './services';
import httpInterceptorModule from './httpInterceptor';
import homeModule from './home';
import testModule from './hello';
import todosModule from './todos';
import authModule from './auth';
import loginModule from './login';

// create and bootstrap application
angular.element(document).ready(() => {
  const requires = [
    'ui.router',
    'mdl',
    templates.name,
    directives.name,
    controllers.name,
    directives.name,
    httpInterceptorModule.name,
    homeModule.name,
    testModule.name,
    todosModule.name,
    authModule.name,
    loginModule.name
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').config(require('./routes')); //defaults for ui-router

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);
});
