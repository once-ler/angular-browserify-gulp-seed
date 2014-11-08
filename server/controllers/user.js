var _ = require('lodash'),
  User = require('../models/User.js'),
  userRoles = require('../../public/src/app/routingConfig').userRoles;

module.exports = {
  index: function(req, res) {
    var users = User.findAll();
    _.each(users, function(user) {
      delete user.password;
    });
    res.json(users);
  }
};