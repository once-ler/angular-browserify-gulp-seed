'use strict';

require('angular')

var app = angular.module('app.auth.controllers',[]);

app.controller('NavCtrl', require('./NavCtrl'));

module.exports = app;
