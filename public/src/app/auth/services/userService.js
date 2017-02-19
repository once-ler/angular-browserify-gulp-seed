export default $http => ({
  getAll(success, error) {
    $http.get('/users').success(success).error(error);
  }
});