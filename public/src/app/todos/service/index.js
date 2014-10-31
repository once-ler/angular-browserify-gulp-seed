'use strict';

require('angular');

var app = angular.module('app.todos.services',[]);

app.service('ImprintService', require('./imprint'));
app.service('TodoService', require('./todos'));

module.exports = app;
