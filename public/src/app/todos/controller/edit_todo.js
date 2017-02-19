export default ($scope, TodoService) => {

  let backupForCancel;
  let creatingNew = false;

  $scope.editMode = false;

  $scope.create = () => {
    $scope.$parent.todo = TodoService.create();
    backupForCancel = null;
    creatingNew = true;
    $scope.editMode = true;
  };

  $scope.edit = () => {
    if ($scope.editMode) {
      return;
    }
    backupForCancel = copy($scope.$parent.todo);
    creatingNew = false;
    $scope.editMode = true;
  };

  $scope.save = () => {
    if (creatingNew) {
      TodoService.insert($scope.$parent.todo);
    }
    $scope.editMode = false;
    creatingNew = false;
    backupForCancel = null;
  };

  $scope.cancel = () => {
    if (!creatingNew) {
      // rollback edits
      $scope.$parent.todo.title = backupForCancel.title;
      $scope.$parent.todo.due = backupForCancel.due;
      $scope.$parent.todo.text = backupForCancel.text;
    } else {
      // discard new todo, set active todo to some arbitrary todo
      $scope.$parent.todo = TodoService.getTodos()[0];
      creatingNew = false;
    }
    $scope.editMode = false;
  };

  $scope.remove = () => {
    TodoService.remove($scope.$parent.todo);
    // set active todo to some arbitrary todo
    $scope.$parent.todo = TodoService.getTodos()[0];
  };

  function copy(todo) {
    return {
      title: todo.title,
      due: todo.due,
      text: todo.text,
    };
  }
};
