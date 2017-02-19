/**
http://codingsmackdown.tv/blog/2013/04/20/using-response-interceptors-to-show-and-hide-a-loading-widget-redux/
**/

const app = angular.module('app.http.interceptor', []);

app.config(['$httpProvider', $httpProvider => {
  let $http;

  const interceptor = ['$q', '$injector', ($q, $injector) => {
    let notificationChannel;

    function success(response) {
      // get $http via $injector because of circular dependency problem
      $http = $http || $injector.get('$http');
      // don't send notification until all requests are complete
      if ($http.pendingRequests.length < 1) {
        // get requestNotificationChannel via $injector because of circular dependency problem
        notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
        // send a notification requests are complete
        notificationChannel.requestEnded();
      }
      return response;
    }

    function error(response) {
      // get $http via $injector because of circular dependency problem
      $http = $http || $injector.get('$http');
      // don't send notification until all requests are complete
      if ($http.pendingRequests.length < 1) {
        // get requestNotificationChannel via $injector because of circular dependency problem
        notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
        // send a notification requests are complete
        notificationChannel.requestEnded();
      }
      return $q.reject(response);
    }

    //return function(promise) {
    function notUsed(promise) {

      // get requestNotificationChannel via $injector because of circular dependency problem
      notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
      // send a notification requests are complete
      notificationChannel.requestStarted();
      return promise.then(success, error);
    }

    function request(config){
      // get requestNotificationChannel via $injector because of circular dependency problem
      notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
      // send a notification requests are complete
      notificationChannel.requestStarted();

      return config;
    }

    //>=1.3
    return {
      "requestError": error,
      "request": request,
      "response": success
    };

  }];

  //~1.2
  //$httpProvider.responseInterceptors.push(interceptor);
  //>=1.3
  $httpProvider.interceptors.push(interceptor);
}]);

app.factory('requestNotificationChannel', ['$rootScope', $rootScope => {
  // private notification messages
  const _START_REQUEST_ = '_START_REQUEST_';
  const _END_REQUEST_ = '_END_REQUEST_';

  // publish start request notification
  const requestStarted = () => {
    $rootScope.$broadcast(_START_REQUEST_);
  };
  // publish end request notification
  const requestEnded = () => {
    $rootScope.$broadcast(_END_REQUEST_);
  };
  // subscribe to start request notification
  const onRequestStarted = ($scope, handler) => {
    $scope.$on(_START_REQUEST_, event => {
      handler();
    });
  };
  // subscribe to end request notification
  const onRequestEnded = ($scope, handler) => {
    $scope.$on(_END_REQUEST_, event => {
      handler();
    });
  };

  return {
    requestStarted,
    requestEnded,
    onRequestStarted,
    onRequestEnded
  };
}]);

export default app;