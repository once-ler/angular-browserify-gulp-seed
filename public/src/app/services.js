const app = angular.module('app.services', []);

app
  .factory('SharedControllerService', $rootScope => ({
  message: "",

  prepareBroadcast(msg) {
    this.message = msg;
    this.broadcastItem();
  },

  broadcastItem() {
    $rootScope.$broadcast('handleBroadcast', this.message);
  }
}));
