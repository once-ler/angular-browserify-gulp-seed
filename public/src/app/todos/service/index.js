require('angular');

const app = angular.module('app.todos.services',[]);

app.service('ImprintService', require('./imprint'));
app.service('TodoService', require('./todos'));

export default app;
