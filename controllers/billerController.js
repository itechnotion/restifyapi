var Biller = require('../models/billerModel');
var biller = new Biller();


module.exports.controller = function (server) {

    server.get('/billers', biller.getAllBillers)
    server.get('/biller/:id', biller.getBillerById)

  
}