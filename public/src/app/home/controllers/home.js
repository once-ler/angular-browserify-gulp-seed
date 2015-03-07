'use strict';

module.exports = function($scope, HomeService, AnotherHomeService) {
  HomeService.saySomething();
  AnotherHomeService.saySomething();
};
