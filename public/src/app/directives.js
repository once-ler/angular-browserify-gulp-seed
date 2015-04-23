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

/**
  Add directives for ajax loading effects
**/
app.directive('loadingWidget', function (requestNotificationChannel) {
  return {
    restrict: "A",
    link: function (scope, element) {
      
      //Add one time
      element.addClass('loading');

      // hide the element initially
      element.removeClass('loaded');

      var startRequestHandler = function() {
        // got the request start notification, show the element
        element.removeClass('loaded');
      };

      var endRequestHandler = function() {
        // got the request start notification, show the element
        element.addClass('loaded');
      };

      requestNotificationChannel.onRequestStarted(scope, startRequestHandler);

      requestNotificationChannel.onRequestEnded(scope, endRequestHandler);
    }
  };
});

app.directive('loadingContainer', function() {
  return {
    restrict: 'A',
    scope: false,
    link: function(scope, element, attrs) {
      var loadingLayer = angular.element('<div class="loading"></div>');
      element.append(loadingLayer);
      element.addClass('loading-container');
      scope.$watch(attrs.loadingContainer, function(value) {
        loadingLayer.toggleClass('ng-hide', !value);
      });
    }
  };
});

module.exports = app;