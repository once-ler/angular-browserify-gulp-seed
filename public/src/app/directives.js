'use strict';

var app = angular.module('app.directives', []);
  
var homeHeader = function () {
  return {
    restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
    replace: true,
    scope: false, //scope is not inherited, scope is same as parent 
    templateUrl: "partials/header.html"
  };
};

var homeNav = function () {
  return {
    restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
    replace: true,
    scope: false, //scope is not inherited, scope is same as parent 
    templateUrl: "partials/nav.html"
  };
};

app.directive('homeHeader', homeHeader);
app.directive('homeNav',  homeNav)

module.exports = app;