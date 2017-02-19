export default ($scope, TodoService) => {

  $scope.getTodos = TodoService.getTodos.bind(TodoService);

  $scope.select = todo => {
    $scope.$parent.todo = todo;
  };

  $scope.getCssClass = todo => {
    if (todo === $scope.$parent.todo) {
      return ['sidebar-item-active'];
    } else {
      return ['sidebar-item-inactive'];
    }
  };

};
