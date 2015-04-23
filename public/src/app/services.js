'use strict';

var app = angular.module('app.services', []);

app
  .factory('SharedControllerService', function($rootScope) {
    return {
      message: "",
      prepareBroadcast: function(msg) {
        this.message = msg;
        this.broadcastItem();
      },
      broadcastItem: function() {
        $rootScope.$broadcast('handleBroadcast', this.message);
      }      
    }
  });
