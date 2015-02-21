'use strict';

var routingConfig = require('./routingConfig');
/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

  /*
  Each module will configure their own routes and authorization
  */
  
  var access = routingConfig.accessLevels;

  // Public routes
  $stateProvider
  .state('public', {
    abstract: true,
    template: "<ui-view/>",
    data: {
        access: access.public
    }
  })
  .state('public.404', {
    url: '/404/',
    templateUrl: '404.html'
  });

  // Anonymous routes
  $stateProvider
    .state('anon', {
      abstract: true,
      template: "<ui-view/>",
      data: {
        access: access.anon
      }
    })
    .state('anon.home', {
      url: '/',
      templateUrl: '/partials/hello/home.html',
      controller: 'HomeController'
    });
    
    
  // Regular user routes
    $stateProvider
    .state('user', {
      abstract: true,
      template: "<ui-view/>",
      data: {
          access: access.user
      }
    })
    /**
    .state('user.home', {
      url: '/',
      templateUrl: '/partials/todos/todos.html'
    });
    **/

  $urlRouterProvider.otherwise('/404');

  // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
  $urlRouterProvider.rule(function($injector, $location) {
    if ($location.protocol() === 'file')
      return;

    var path = $location.path()
      // Note: misnomer. This returns a query object, not a search string
      ,
      search = $location.search(),
      params;

    // check to see if the path already ends in '/'
    if (path[path.length - 1] === '/') {
      return;
    }

    // If there was no search string / query params, return with a `/`
    if (Object.keys(search)
      .length === 0) {
      return path + '/';
    }

    // Otherwise build the search string and return a `/?` prefix
    params = [];
    angular.forEach(search, function(v, k) {
      params.push(k + '=' + v);
    });
    return path + '/?' + params.join('&');
  });

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push(function($q, $location) {
    return {
      'responseError': function(response) {
        if (response.status === 401 || response.status === 403) {
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  });
  
  /**
  $httpProvider.interceptors.push(function($q, $location) {
      return {
          'responseError': function(response) {
              if(response.status === 401 || response.status === 403) {
                //$location.path('/login');
                window.location.href = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/login?_redirect=/';
              }
              return $q.reject(response);
          }
      };
  });
  **/
}

module.exports = Routes;