export default ($rootScope, $scope, $location, Auth) => {
  $scope.user = Auth.user;
  $scope.userRoles = Auth.userRoles;
  $scope.accessLevels = Auth.accessLevels;

  $scope.close = () => {
    $rootScope.error = null;
  };

  $scope.logout = () => {
    Auth.logout(() => {
      $location.path('/login');
    }, () => {
      $rootScope.error = "Failed to logout";
    });
  };

  $scope.menuToggle = () => {
    $("#wrapper").toggleClass("active");
  };
};