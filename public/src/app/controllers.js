'use strict';

var app = angular.module('app.controllers', ['app.auth']);
 
var navCtrl = function($rootScope, $scope, $location, $timeout, Auth) {
  $scope.user = Auth.user;
  $scope.userRoles = Auth.userRoles;
  $scope.accessLevels = Auth.accessLevels;

  $scope.logout = function() {
    Auth.logout(function() {
      $location.path('/login');
    }, function() {
      $timeout(function() { $rootScope.error = "Failed to logout"; }, 0);
    });
  };
};

app.controller('NavCtrl', navCtrl);

module.exports = app;