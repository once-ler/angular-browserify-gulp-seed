angular-browserify-gulp-seed
============================

####Boilerplate for Angular 1.3x

##Features
- [x] App and vendor files bundled separately for faster refreshes since vendor bundle don't change often.
- [x] Include nodemon so we can watch for changes in express and middleware.
- [x] Authentication and authorization modules for angular.
- [x] Best practice directory structure for angular and gulp.
- [x] Material Design Lite and SCSS.
- [x] Updated to ES6 for front-end.

##Directory by Feature and Type Hybrid

###Structure

+ **_src/_**
  + **_app/_**
    + **_Your First Module_**
        + index.js
        + module.js
        + **_controllers/_**
        + **_directives/_**
        + **_partials/_**
        + **_services/_**
          + your-service.js
          + module.js
          + index.js             
    + **_auth/_**
      + index.js
      + module.js
      + **_controllers/_**
        + NavCtrl.js
        + index.js
        + module.js
      + **_directives/_**
        + accessLevelDirective.js
        + accessNavDirective.js
        + alertBox.js
        + content.js
        + footer.js
        + header.js
        + index.js
        + module.js
        + sidebar.js
      + **_partials/_**
        + 404.tpl.html
        + alert-box.tpl.html
        + content.tpl.html
        + footer.tpl.html
        + header.tpl.html
        + index.tpl.html
        + notFound.tpl.html
        + sidebar.tpl.html
        + index.js
      + **_services/_**
        + authService.js
        + userService.js
        + index.js
        + module.js
    + **_Your Next Module_**
        + index.js
        + module.js
        + **_controllers/_**
        + **_directives/_**
        + **_partials/_**
        + **_services/_**
          + your-next-service.js
          + module.js
          + index.js 
    + **_login/_**
    + **_menu/_**
    + **_private/_**
    + **_register/_**
    + **_user/_**
  + **_scss/_**
  + **_img/_**
