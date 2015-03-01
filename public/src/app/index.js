'use strict';

// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');

//What is this for again?
require('./templates');

var homeModule = require('./home');
var testModule = require('./hello');
var todosModule = require('./todos');
var authModule = require('./auth');
var loginModule = require('./login');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
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