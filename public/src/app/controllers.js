const app = angular.module('app.controllers', ['app.auth']);

const navCtrl = ($rootScope, $scope, $location, $timeout, Auth) => {
  $scope.user = Auth.user;
  $scope.userRoles = Auth.userRoles;
  $scope.accessLevels = Auth.accessLevels;

  $scope.logout = () => {
    Auth.logout(() => {
      $location.path('/login');
    }, () => {
      $timeout(() => { $rootScope.error = "Failed to logout"; }, 0);
    });
  };
};

app.controller('NavCtrl', navCtrl);

export default app;