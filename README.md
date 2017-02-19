angular-browserify-gulp-seed
============================

####Boilerplate for Angular 1.3x

##Features
- [x] App and vendor files bundled separately for faster refreshes since vendor bundle don't change often.
- [x] Include nodemon so we can watch for changes in express and middleware.
- [x] Authentication and authorization modules for angular included.
- [x] Best practice directory structure for angular and gulp.
- [x] Material Design Lite and SCSS support included.
- [x] Uses ES6 for front-end and CommonJS for back-end.

##Usage
####Getting Started
```
$ npm install
$ bower install
```

####Development
- Automatic front-end refresh by way of browser-sync and watchify.
- Automatic server refresh by way of nodemon.
```bash
$ gulp dev
```

####Production
```bash
$ gulp prod
```

##Hybrid of Directory by Feature and Directory by Type
Great read [here](https://johnpapa.net/angular-app-structuring-guidelines/)

###Structure

+ **_src/_**
  + **_app/_**
    + **_auth/_**
      + index.js
      + **_controllers/_**
        + NavCtrl.js
        + index.js
      + **_directives/_**
        + accessLevelDirective.js
        + accessNavDirective.js
        + alertBox.js
        + index.js              
      + **_services/_**
        + authService.js
        + userService.js
        + index.js
    + **_Your Custom Module_**
        + index.js
        + **_controllers/_**
        + **_directives/_**
        + **_services/_**
          + your-custom-service.js
          + index.js 
    + **_login/_**
    + **_home/_**
  + **_scss/_**
    + **_home/_**
      + home.scss
      + login.scss
    + app.scss
    + variables.scss
  + **_img/_**
  + **_views_**
    + **_partials/_**
      + **_home/_**
        + home.html
      + **_login/_**
        + login.html
      + 404.html
      + header.html
      + nav.html
    + index.html
