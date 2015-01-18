var _ = require('lodash'),
  path = require('path'),
  passport = require('passport'),
  AuthCtrl = require('./controllers/auth'),
  UserCtrl = require('./controllers/user'),
  User = require('./models/User.js'),
  userRoles = require('../public/src/app/routingConfig').userRoles,
  accessLevels = require('../public/src/app/routingConfig').accessLevels;

var routes = [

  // Partials will be handled by angular templateCache
  // Views will be handled by ejs
  // Views
  
  {
      path: '/views/*',
      httpMethod: 'GET',
      middleware: [function (req, res) {
          var requestedView = path.join('./', req.url);
          res.render(requestedView);
      }]
  },
  
  // Local Auth
  {
    path: '/register',
    httpMethod: 'POST',
    middleware: [AuthCtrl.register]
  }, {
    path: '/login',
    httpMethod: 'POST',
    middleware: [AuthCtrl.login]
  }, {
    path: '/logout',
    httpMethod: 'POST',
    middleware: [AuthCtrl.logout]
  },

  // User resource
  {
    path: '/users',
    httpMethod: 'GET',
    middleware: [UserCtrl.index],
    accessLevel: accessLevels.admin
  },

  // login
  {
    path: '/login',
    httpMethod: 'GET',
    middleware: [function(req, res) {
      //res.cookie('XSRF-TOKEN', req.csrfToken());
      //console.log(res.cookie('XSRF-TOKEN'))
      //csrf token was previously set by middleware
      //Reset
      //res.cookie('XSRF-TOKEN', req.csrfToken());
      res.render('login', {
        //token: req.cookies['XSRF-TOKEN'],
        token: req.csrfToken(),
        _redirect: req.query._redirect,
        message: ""
      });
    }]
  },  

  // All other get requests should be handled by AngularJS's client-side routing system
  {
    path: '/*',
    httpMethod: 'GET',
    middleware: [function(req, res) {

      var role = userRoles.public,
        username = '';
      if (req.user) {
        role = req.user.role;
        username = req.user.username;
      }
      res.cookie('user', JSON.stringify({
        'username': username,
        'role': role
      }));
      res.render('index', {
        title: "EJS as HTML example",
        headline: "Our Angular app 'hello' will be loaded here if all turns out well!!!"
      });
    }]
  }
  
];

module.exports = function(app, options) {

  _.each(routes, function(route) {
    route.middleware.unshift(ensureAuthorized);
    var args = _.flatten([route.path, route.middleware]);

    switch (route.httpMethod.toUpperCase()) {
      case 'GET':
        app.get.apply(app, args);
        break;
      case 'POST':
        app.post.apply(app, args);
        break;
      case 'PUT':
        app.put.apply(app, args);
        break;
      case 'DELETE':
        app.delete.apply(app, args);
        break;
      default:
        throw new Error('Invalid HTTP method specified for route ' + route.path);
        break;
    }
  });
}

function ensureAuthorized(req, res, next) {
  var role;
  if (!req.user) role = userRoles.public;
  else role = req.user.role;
  var accessLevel = _.findWhere(routes, {
    path: req.route.path,
    httpMethod: req.route.stack[0].method.toUpperCase()
  }).accessLevel || accessLevels.public;

  if (!(accessLevel.bitMask & role.bitMask)) return res.send(403);
  return next();
}