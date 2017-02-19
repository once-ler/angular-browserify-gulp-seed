require('angular')

const app = angular.module('app.home.directives',[]);

app.directive('homeDirective', require('./home'));
export default app;
