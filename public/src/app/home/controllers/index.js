'use strict';
require('angular')

var app = angular.module('app.home.controllers',[]);

app.controller('HomeCtrl', require('./home'));

module.exports = app;
