const app = angular.module('app.directives', []);

const homeHeader = () => ({
  //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
  restrict: 'A',

  replace: true,

  //scope is not inherited, scope is same as parent 
  scope: false,

  templateUrl: "partials/header.html"
});

const homeNav = () => ({
  //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
  restrict: 'A',

  replace: true,

  //scope is not inherited, scope is same as parent 
  scope: false,

  templateUrl: "partials/nav.html"
});

app.directive('homeHeader', homeHeader);
app.directive('homeNav',  homeNav)

/**
  Add directives for ajax loading effects
**/
app.directive('loadingWidget', requestNotificationChannel => ({
  restrict: "A",

  link(scope, element) {
    
    //Add one time
    element.addClass('loading');

    // hide the element initially
    element.removeClass('loaded');

    const startRequestHandler = () => {
      // got the request start notification, show the element
      element.removeClass('loaded');
    };

    const endRequestHandler = () => {
      // got the request start notification, show the element
      element.addClass('loaded');
    };

    requestNotificationChannel.onRequestStarted(scope, startRequestHandler);

    requestNotificationChannel.onRequestEnded(scope, endRequestHandler);
  }
}));

app.directive('loadingContainer', () => ({
  restrict: 'A',
  scope: false,

  link(scope, element, attrs) {
    const loadingLayer = angular.element('<div class="loading"></div>');
    element.append(loadingLayer);
    element.addClass('loading-container');
    scope.$watch(attrs.loadingContainer, value => {
      loadingLayer.toggleClass('ng-hide', !value);
    });
  }
}));

export default app;