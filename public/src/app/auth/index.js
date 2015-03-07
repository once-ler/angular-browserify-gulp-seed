'use strict';

require('angular');
require('angular-ui-router')

var services = require('./services');
var controllers = require('./controllers');
var directives = require('./directives');

var app = angular.module('app.auth', [ 'ui.router', services.name, controllers.name, directives.name ]);

module.exports = app;
