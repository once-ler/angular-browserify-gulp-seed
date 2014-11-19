'use strict';

require('angular');
require('angular-cookies');

var app = angular.module('app.auth.services',['ngCookies']);

app.factory('Auth', require('./authService'));
app.factory('Users', require('./userService'));

module.exports = app;
