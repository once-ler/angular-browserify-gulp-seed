'use strict';

require('angular')

var app = angular.module('app.home.directives',[]);

app.directive('homeHeader', require('./header'));
module.exports = app;
