'use strict';

// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');

//require material
require('angular-material-design-lite');

var templates = require('./templates');
var directives = require('./directives');
var controllers = require('./controllers');
var services = require('./services');

var httpInterceptorModule = require('./httpInterceptor');
var homeModule = require('./home');
var testModule = require('./hello');
var todosModule = require('./todos');
var authModule = require('./auth');
var loginModule = require('./login');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
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

  //angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes')); //defaults for ui-router

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});