var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console,{timestamp: true });
winston.add(winston.transports.File, { filename: 'Test_Result.log'});
module.exports = winston;
