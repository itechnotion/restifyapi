var restify = require('restify');
var fs = require('fs');
var log = require('./util/logger');

// creat server
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0',
  log:log
});

server.pre(function (request, response, next) {
    //request.log.info({req: request}, 'start');        // (1)  
  return next();
   
});

// add middleware
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


//read all controllers
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(server);
  }
});

// start server on specific port
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});