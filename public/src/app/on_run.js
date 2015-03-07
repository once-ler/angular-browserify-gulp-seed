'use strict';

/**
 * @ngInject
 */
function OnRun($rootScope, $state, $location, Auth) {
  
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
      
    if(!('data' in toState) || !('access' in toState.data)){
      $rootScope.error = "Access undefined for this state";
      event.preventDefault();
    }
    else if (!Auth.authorize(toState.data.access)) {
      $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
      event.preventDefault();

      if (fromState.url === '^') {
        if (Auth.isLoggedIn()) {
          $state.go('user.home');          
        } else {
          $rootScope.error = null;
          $state.go('anon.home');
        }
      }
    }
  });
}

module.exports = OnRun;