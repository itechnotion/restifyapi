var con = require('../config')
var Util = require('../util/response');
var message = require('../util/messages.json');
var log = require('../util/logger');

var Biller = function () {};
var util = new Util();

Biller.prototype.getAllBillers = function (req, res, next) {

    con.query("SELECT * FROM billers", function (err, result, fields) {
            if (err) {
                res.send(util.error(err,message.get_all_billers_fail));

            } else {
               res.send(util.success(result, message.get_all_billers_success));
                //res.send(result);
            }
        });

    return next();
};

Biller.prototype.getBillerById = function (req, res, next) {

    con.query("SELECT * FROM billers where id="+req.params.id, function (err, result, fields) {
           if (err) {
                res.send(util.error(err, message.get_billers_by_id_fail));

            } else {
                res.send(util.success(result, message.get_billers_by_id_success));
            }
        });

    return next();
};




module.exports = Biller
