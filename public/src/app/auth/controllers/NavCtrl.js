'use strict';

module.exports = function($rootScope, $scope, $location, Auth) {
  $scope.user = Auth.user;
  $scope.userRoles = Auth.userRoles;
  $scope.accessLevels = Auth.accessLevels;

  $scope.close = function() {
    $rootScope.error = null;
  };

  $scope.logout = function() {
    Auth.logout(function() {
      $location.path('/login');
    }, function() {
      $rootScope.error = "Failed to logout";
    });
  };

  $scope.menuToggle = function() {
    $("#wrapper").toggleClass("active");
  };
}