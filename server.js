'use strict';

var config  = require('./gulp/config')
, path = require('path')
, express = require('express')
, http = require('http')
, passport = require('passport')
, morgan  = require('morgan')
, bodyParser =      require('body-parser')
, methodOverride =  require('method-override')
, cookieParser = require('cookie-parser')
, cookieSession = require('cookie-session')
, session = require('express-session')
, csrf = require('csurf')
, User = require('./server/models/User.js');

var app = express();

// log all requests to the console
app.use(morgan('dev'));

// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/server/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.use(morgan('dev'));
var urlencodedParser = app.use(bodyParser.urlencoded({extended: true}));
var jsonParser = app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'server/public')));

app.use(cookieParser());
app.use(session(
  {
      secret: process.env.COOKIE_SECRET || "Superdupersecret"
  }));

//var env = process.env.NODE_ENV || 'development';
//if ('development' === env || 'production' === env) {

//Tell express where csrf will be located
var csrfValue = function(req) {
  var token = req.cookies['XSRF-TOKEN']
    || (req.body && req.body._csrf)
    || (req.query && req.query._csrf)
    || (req.headers['x-csrf-token'])
    || (req.headers['x-xsrf-token']);
  return token;
};

  app.use(csrf({value: csrfValue}));
  app.use(function(req, res, next) {
    //console.log(req.csrfToken());
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
  });
//}

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.localStrategy);

passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);

require('./server/routes.js')(app);

// Start webapp
app.set('port', config.serverport);
//app.on('listening', function() {
//  console.log('Express app started on port %s at %s', app.address().port, app.address().address);
//});
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express app started on port %s at %s', server.address().port, server.address().address);
});