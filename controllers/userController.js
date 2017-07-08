var User = require('../models/userModel');
var user = new User();

module.exports.controller = function (server) {

    server.get('/users', user.getUser)

}