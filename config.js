'use strict';
var mysql = require('mysql');

var config = mysql.createConnection({host: "localhost", user: "root", password: "", database: "testdb"});
module.exports = config