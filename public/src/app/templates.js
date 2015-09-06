module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("partials/404.html","<h1>404</h1>\r\n<p>Oops! Ain\'t nothing here.</p>");
$templateCache.put("partials/header.html","<div class=\"navbar navbar-inverse navbar-fixed-top carbon\">\r\n  <div class=\"navbar-inner\">\r\n   <div class=\"container\" style=\"margin-top:0;padding-left:0;\">\r\n      <a class=\"brand\" href=\"#\"><img src=\"/img/favicons/mfny2.jpeg\" ></a>\r\n   </div>\r\n </div>\r\n</div>");
$templateCache.put("partials/nav.html","<div data-ng-controller=\"NavCtrl\" class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n<header class=\"mdl-layout__header\">\r\n  <div class=\"mdl-layout__header-row\">\r\n    <!-- Title -->\r\n    <span class=\"mdl-layout-title\"><img src=\"/img/favicons/mfny2.jpeg\" ></span>\r\n    <!-- Add spacer, to align navigation to the right -->\r\n    <div class=\"mdl-layout-spacer\"></div>\r\n    <!-- Navigation. We hide it in small screens. -->\r\n    <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n      <a data-access-level=\"accessLevels.user\" class=\"mdl-navigation__link\" href=\"/home\">Home</a>\r\n      <a data-access-level=\"accessLevels.user\" class=\"mdl-navigation__link\" href=\"/todos\">TODOS</a>\r\n      <a data-access-level=\"accessLevels.public\" class=\"mdl-navigation__link\" href=\"/hello\" active-nav>Hello World</a>\r\n      <a data-access-level=\"accessLevels.anon\" class=\"mdl-navigation__link\" href=\"/login\" active-nav>Login</a>\r\n      <a data-access-level=\"accessLevels.user\" class=\"mdl-navigation__link\" href=\"\" data-ng-click=\"logout()\">Log out</a>\r\n    </nav>\r\n  </div>\r\n</header>\r\n<div class=\"mdl-layout__drawer\">\r\n  <span class=\"mdl-layout-title\">Title</span>\r\n  <nav class=\"mdl-navigation\">\r\n    <a data-access-level=\"accessLevels.user\" class=\"mdl-navigation__link\" href=\"/home\">Home</a>\r\n    <a data-access-level=\"accessLevels.user\" class=\"mdl-navigation__link\" href=\"/todos\">TODOS</a>\r\n    <a data-access-level=\"accessLevels.public\" class=\"mdl-navigation__link\" href=\"/hello\">Hello World</a>\r\n    <a data-access-level=\"accessLevels.anon\" class=\"mdl-navigation__link\" href=\"/login\">Login</a>\r\n    <a data-access-level=\"accessLevels.user\" class=\"mdl-navigation__link\" href=\"\" data-ng-click=\"logout()\">Log out</a>\r\n  </nav>\r\n</div>\r\n\r\n<!--\r\n  <div data-ng-controller=\"NavCtrl\" class=\"navbar navbar-fixed-top\" style=\"top:60px;\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"container-fluid\">\r\n      <ul class=\"nav nav-pills\">\r\n        <li data-access-level=\"accessLevels.user\" active-nav><a href=\"/home\">Home</a>\r\n        </li>\r\n        <li data-access-level=\"accessLevels.user\" active-nav><a href=\"/todos\">TODOS</a>\r\n        </li>\r\n        <li data-access-level=\"accessLevels.public\" active-nav><a href=\"/hello\">Hello World</a>\r\n        </li>\r\n        <li data-access-level=\"accessLevels.anon\" active-nav><a href=\"/login\">Login</a>\r\n        </li>\r\n        <div id=\"userInfo\" data-access-level=\"accessLevels.user\" class=\"pull-right\">Welcome&nbsp;<strong>{{ user.username }}&nbsp;</strong><span data-ng-class=\"{&quot;label-info&quot;: user.role.title == userRoles.user.title, &quot;label-success&quot;: user.role.title == userRoles.admin.title}\" class=\"label\">{{ user.role.title }}</span>\r\n          <span data-access-level=\"accessLevels.user\"><a class=\"btn btn-danger\" href=\"\" data-ng-click=\"logout()\">Log out</a>\r\n        </span>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n</div>\r\n\r\n\r\n");
$templateCache.put("partials/hello/home.html","<!-- Top Card -->\n <div class=\"mdl-grid\">\n   <div class=\"mdl-cell mdl-cell--12-col\">\n    <div class=\"mdl-card mdl-shadow--8dp demo-card-wide\">\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\"  style=\"position:absolute;top:10px;left:40%\">\n          Featured event:<br>\n          May 24, 2016<br>\n          7-11pm\n        </h2>\n      </div>\n\n      <!--\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\">Welcome to my demo</h2>\n      </div>\n      -->\n      <div class=\"mdl-card__supporting-text\">\n        This is a work in progress. I\'ll continue to add on new components as I read through the MDL documentation.\n      </div>\n      <div class=\"mdl-card__actions mdl-card--border\">\n        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n          Get Started\n        </a>\n      </div>\n      <div class=\"mdl-card__menu\">\n        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n          <i class=\"material-icons\">share</i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h1>Hello World! <span ng-if=\"greetings\">{{ greetings }}</span></h1>\n<p>Refresh page to see <code>MyApp.controllers.HomeController</code> in action!</p>\n\n");
$templateCache.put("partials/home/body.html","<h1>This is the home body</h1>");
$templateCache.put("partials/login/login.html","<!--\r\n<h1>Log in</h1>\r\n<p>This site is an example of how one can implement role based authentication in Angular applications as outlined in<a href=\"http://www.frederiknakstad.com/authentication-in-single-page-applications-with-angular-js/\"> this blogpost</a>. All the code can\r\n    be found in<a href=\"https://github.com/fnakstad/angular-client-side-auth\"> this GitHub repository</a>. You can either register a new user, log in with one of the two predefined users...</p>\r\n<ul>\r\n    <li>admin/123</li>\r\n    <li>user/123</li>\r\n</ul>\r\n<hr/>\r\n-->\r\n\r\n<!--\r\n<div class=\"text-vertical-center\">\r\n    <p class=\"form-title\">Sign In</p>\r\n    <form class=\"login\" ng-submit=\"login()\">\r\n        <input type=\"text\" placeholder=\"Username\" name=\"username\" id=\"login\" autocomplete=\"off\" data-ng-model=\"username\" />\r\n        <input type=\"password\" placeholder=\"Password\" name=\"password\" id=\"pass\" autocomplete=\"off\" data-ng-model=\"password\" />\r\n        <input type=\"submit\" value=\"Sign In\" class=\"btn btn-success btn-sm\" />\r\n    </form>\r\n</div>\r\n-->\r\n<!--\r\n<h3 class=\"mdl-typography--text-center\">Sign In</h3>\r\n-->\r\n<form ng-submit=\"login()\">\r\n    <div class=\"mdl-cell--12-col mdl-grid\">\r\n        <div class=\"mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet\">&nbsp;</div>\r\n        <div class=\"mdl-grid mdl-cell--4-col\">\r\n            <div class=\"mdl-textfield mdl-js-textfield mdl-cell-12-col mdl-cell--8-col-tablet\">\r\n                <input class=\"mdl-textfield__input mdl-color-text--pink-200\" type=\"text\" placeholder=\"Username\" id=\"login\" autocomplete=\"off\" data-ng-model=\"username\"/>\r\n                <!--<label class=\"mdl-textfield__label\" for=\"username\">Username</label>-->\r\n            </div>\r\n\r\n            <div class=\"mdl-textfield mdl-js-textfield mdl-cell-12-col mdl-cell--8-col-tablet\">\r\n                <input class=\"mdl-textfield__input mdl-color-text--pink-200\" type=\"password\" placeholder=\"Password\" id=\"pass\" autocomplete=\"off\" data-ng-model=\"password\" />\r\n                <!--<label class=\"mdl-textfield__label\" for=\"password\">Password</label>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet\">&nbsp;</div>\r\n        </form>\r\n    </div>\r\n    <div style=\"text-align:center;\">\r\n    <input type=\"submit\" value=\"Sign In\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary\" style=\"font-size:24px;\"/>\r\n    </div>\r\n</form>\r\n\r\n<!--\r\n<form ng-submit=\"login()\" name=\"loginForm\" role=\"form\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n        <label for=\"username\" class=\"control-label col-sm-2\">Username</label>\r\n        <div class=\"col-sm-10\">\r\n            <input type=\"text\" data-ng-model=\"username\" placeholder=\"Username\" name=\"username\" required=\"required\" autofocus=\"autofocus\" class=\"form-control\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\" class=\"control-label col-sm-2\">Password</label>\r\n        <div class=\"col-sm-10\">\r\n            <input type=\"password\" data-ng-model=\"password\" placeholder=\"Password\" name=\"password\" required=\"required\" class=\"form-control\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n            <div class=\"checkbox\">\r\n                <label for=\"rememberme\" class=\"checkbox\">\r\n                    <input type=\"checkbox\" data-ng-model=\"rememberme\" name=\"rememberme\" />Remember me</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n            <button type=\"submit\" data-ng-disabled=\"loginForm.$invalid\" class=\"btn btn-default\">Log in</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n-->\r\n");
$templateCache.put("partials/todos/imprint.html","<div>\n  {{ text }}\n</div>\n\n<p>\n\n<a href=\"#/todos\">Shut up and take me to the todo list!</a>\n");
$templateCache.put("partials/todos/todos.html","<div class=\"grid-20 grid-parent\">\n  <div class=\"margins rounded-box text-on-blue\">\n    <div class=\"sidebar-heading sidebar-heading-skin dark-blue-bg\">Your Todos</div>\n    <div ng-controller=\"TodoListCtrl\">\n      <a ng-repeat=\"todo in getTodos()\"\n        ng-click=\"select(todo)\"\n        class=\"sidebar-item-borders sidebar-item dark-blue-bg\"\n        ng-class=\"getCssClass(todo)\"\n      >\n        <span ng-bind=\"todo.title\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div ng-controller=\"EditTodoCtrl\" class=\"grid-80 grid-parent\">\n  <form novalidate role=\"form\">\n\n    <div class=\"margins padding rounded-box dark-blue-bg text-on-blue\">\n      <div ng-show=\"!editMode\">\n        <span ng-bind=\"todo.title\" class=\"current-item\"/>\n      </div>\n      <div ng-show=\"editMode\">\n        <input\n          type=\"text\"\n          ng-model=\"todo.title\"\n          class=\"current-item current-item-edit\"\n        />\n      </div>\n    </div>\n\n    <div class=\"margins padding rounded-box medium-blue-bg text-on-blue\">\n      <span>Due:</span>\n        {{ todo.due | date : \'short\' }}\n    </div>\n\n    <div\n      ng-show=\"!editMode\"\n      class=\"margins padding rounded-box todo-text\"\n    >\n      <span ng-bind=\"todo.text\"></span>\n    </div>\n    <div\n      ng-show=\"editMode\"\n    >\n      <textarea ng-model=\"todo.text\" class=\"margins padding todo-text todo-text-edit\"></textarea>\n    </div>\n\n    <div ng-show=\"!editMode\">\n      <span class=\"span-save\">\n        <button ng-click=\"edit()\" class=\"btn\">Edit</button>\n        <button ng-click=\"create()\" class=\"btn\">New</button>\n        <button ng-click=\"remove()\" class=\"btn\">Delete</button>\n      </span>\n    </div>\n    <div ng-show=\"editMode\">\n      <span class=\"span-save\">\n        <button ng-click=\"cancel()\" class=\"btn\">Cancel</button>\n        <button ng-click=\"save()\" class=\"btn\">Save</button>\n      </span>\n    </div>\n  </form>\n</div>\n");}]);