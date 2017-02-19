require('angular');

const app = angular.module('app.home.services',[]);

app.service('HomeService', require('./home'));
app.service('AnotherHomeService', require('./anotherHome'));

export default app;
