var Logger = require('bunyan');
//var strftime = require('strftime')

//ar cur_date=strftime('%d-%m-%Y');
/* Logger */
var log = Logger.createLogger({
  name: 'restify',
  streams: [{ path: '/Users/auham/Projects/NodeJs/restifyapi/logs/restify.log'}],
  serializers: {
            req: Logger.stdSerializers.req
        }
});

module.exports = log