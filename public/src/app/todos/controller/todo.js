export default ($scope, TodoService) => {
  $scope.todo = TodoService.getTodos()[0];
};
