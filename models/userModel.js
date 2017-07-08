var con = require('../config')
var Util = require('../util/response');
var message = require('../util/messages.json');

var User = function () {};
var util = new Util();

User.prototype.getUser = function (req, res, next) {

    con
        .query("SELECT * FROM users1", function (err, result, fields) {
            if (err) {
                res.send(util.error(err, message.get_user_fail));

            } else {
                res.send(util.success(result, get_user_sucess));
            }

        });

    return next();
};

module.exports = User
