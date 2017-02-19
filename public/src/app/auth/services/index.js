require('angular');
require('angular-cookies');

const app = angular.module('app.auth.services',['ngCookies']);

app.factory('Auth', require('./authService'));
app.factory('Users', require('./userService'));

export default app;
