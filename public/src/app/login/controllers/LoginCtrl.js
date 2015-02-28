'use strict';

angular.module('app.login.controllers')
  .controller('LoginCtrl', function($rootScope, $scope, $location, $timeout, $window, Auth) {

    $scope.rememberme = true;
    $scope.login = function() {
      Auth.login({
          username: $scope.username,
          password: $scope.password,
          rememberme: $scope.rememberme
        },
        function(res) {
          console.log('here')
          $location.path('/');
        },
        function(err) {
          $timeout(function() { $rootScope.error = "Failed to login"; }, 0);
          //$rootScope.error = "Failed to login";
        });
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });