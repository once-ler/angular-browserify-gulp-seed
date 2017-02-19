require('angular')

const app = angular.module('app.home.controllers',[]);

app.controller('HomeCtrl', require('./home'));

export default app;
