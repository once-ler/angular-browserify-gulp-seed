export default Auth => ({
  restrict: 'A',

  link($scope, element, attrs) {
    const prevDisp = element.css('display');
    let userRole;
    let accessLevel;
    $scope.user = Auth.user;
    $scope.$watch('user', user => {
      if (user.role) userRole = user.role;
      updateCSS();
    }, true);
    attrs.$observe('accessLevel', al => {
      if (al) accessLevel = $scope.$eval(al);
      updateCSS();
    });

    function updateCSS() {
      if (userRole && accessLevel) {
        if (!Auth.authorize(accessLevel, userRole))
          element.css('display', 'none');
        else element.css('display', prevDisp);
      }
    }
  }
});