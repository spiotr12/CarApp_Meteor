"use strict";
import winston from 'winston';
import fs from 'fs';

// const logDir = '../../../../logs';
const logDir = 'logs';	// use this logDir to have new log every time server is build (development)

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

export const Logger = new (winston.Logger)({
	levels: (winston.config.syslog.levels),
	transports: [
		new (winston.transports.Console)({
			level: 'debug',
			// formatter: function (options) {
			// 	return 'cust format:\t' + options.level.toUpperCase() + '\t' + options.message;
			// },
		}),
		new (winston.transports.File)({
			level: 'debug',
			json: false,
			timestamp: function () {
				return (new Date).toString();
			},
			formatter: function (options) {
				// Return string will be passed to logger.
				return options.timestamp() + ' '
					+ options.level.toUpperCase() + ' '
					+ (undefined !== options.message ? options.message : '')
					+ (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
			},
			filename: `${logDir}/app.log`,
		}),
	]
});

