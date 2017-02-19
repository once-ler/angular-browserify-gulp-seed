import routingConfig from '../../routingConfig';

export default ($http, $cookieStore) => {

  const accessLevels = routingConfig.accessLevels,
        userRoles = routingConfig.userRoles,
        currentUser = $cookieStore.get('user') || {
          username: '',
          role: userRoles.public
        };

  $cookieStore.remove('user');

  function changeUser(user) {
    angular.extend(currentUser, user);
  }

  return {
    authorize(accessLevel, role) {
      if (role === undefined) {
        role = currentUser.role;
      }

      return accessLevel.bitMask & role.bitMask;
    },
    isLoggedIn(user) {
      if (user === undefined) {
        user = currentUser;
      }
      return user.role.title === userRoles.user.title || user.role.title === userRoles.admin.title;
    },
    register(user, success, error) {
      $http.post('/register', user).success(res => {
        changeUser(res);
        success();
      }).error(error);
    },
    login(user, success, error) {
      $http.post('/login', user).success(user => {
        changeUser(user);
        success(user);
      }).error(error);
    },
    logout(success, error) {
      $http.post('/logout').success(() => {
        changeUser({
          username: '',
          role: userRoles.public
        });
        success();
      }).error(error);
    },
    accessLevels,
    userRoles,
    user: currentUser
  };
};
