require('angular')

const app = angular.module('app.auth.directives',[]);

app.directive('accessLevel', require('./accessLevelDirective'));
app.directive('activeNav', require('./activeNavDirective'));
app.directive('alertBox', require('./alertBox'));

export default app;
