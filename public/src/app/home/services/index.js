'use strict';

require('angular');

var app = angular.module('app.home.services',[]);

app.service('HomeService', require('./home'));
app.service('AnotherHomeService', require('./anotherHome'));

module.exports = app;
