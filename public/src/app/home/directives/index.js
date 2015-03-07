'use strict';

require('angular')

var app = angular.module('app.home.directives',[]);

app.directive('homeDirective', require('./home'));
module.exports = app;
