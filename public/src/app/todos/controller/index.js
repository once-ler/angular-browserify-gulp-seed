'use strict';
require('angular')

var app = angular.module('app.todos.controllers',[]);

app.controller('EditTodoCtrl', require('./edit_todo'));
app.controller('FooterCtrl', require('./footer'));
app.controller('TodoCtrl', require('./todo'));
app.controller('TodoListCtrl', require('./todo_list'));
app.controller('ImprintCtrl', require('./imprint'));

module.exports = app;
