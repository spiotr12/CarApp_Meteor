import winston from 'winston';

export const Logger = new (winston.Logger)({
	levels: (winston.config.syslog.levels),
	transports: [
		new (winston.transports.Console)({ level: 'debug' }),
		// new (winston.transports.File)({ filename: 'somefile.log' })
	]
});