'use strict';

// require external bower-managed angular libraries
require('angular');
require('angular-ui-router');

var testModule = require('./hello');
var todosModule = require('./todos');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    testModule.name,
    todosModule.name
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  //angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes')); //defaults for ui-router

  //angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});