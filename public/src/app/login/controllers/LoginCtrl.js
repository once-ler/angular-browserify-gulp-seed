angular.module('app.login.controllers')
  .controller('LoginCtrl', ($rootScope, $scope, $location, $timeout, Auth) => {

    $scope.rememberme = true;
    $scope.login = () => {
      Auth.login({
          username: $scope.username,
          password: $scope.password,
          rememberme: $scope.rememberme
        },
        res => {
          $location.path('/home');
        },
        err => {
          $timeout(() => { $rootScope.error = "Failed to login"; }, 0);
          //$rootScope.error = "Failed to login";
        });
    };

    $scope.loginOauth = provider => {
      $window.location.href = `/auth/${provider}`;
    };
  });