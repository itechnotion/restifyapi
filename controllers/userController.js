var User = require('../models/UserModel');
var user = new User();

module.exports.controller = function (server) {

    server.get('/users', user.getUser)

}