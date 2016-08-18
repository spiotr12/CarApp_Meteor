"use strict";
import winston from 'winston';
import fs from 'fs';

const debugLogDir = '../../../../logs-debug';
const logDir = 'logs';	// use this logDir to have new log every time server is build (development)

// Create the app log directory if it does not exist
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

// Create the debug log directory if it does not exist
if (!fs.existsSync(debugLogDir)) {
	fs.mkdirSync(debugLogDir);
}

/*
 (winston.config.syslog.levels)
 levels:	emerg=0, alert=1, crit=2, error=3, warning=4, notice=5, info=6, debug=7
 */

let appLogger = new (winston.transports.File)({
	name: 'app-log',
	level: 'info',
	json: false,
	timestamp: function () {
		return (new Date).toString();
	},
	formatter: function (options) {
		// Return string will be passed to logger.
		return options.timestamp() + ' '
			+ '[' + options.level.toUpperCase() + '] '
			+ (undefined !== options.message ? options.message : '')
			+ (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
	},
	filename: `${logDir}/app.log`,
});

let debugLogger = new (winston.transports.File)({
	name: 'debug-log',
	level: 'debug',
	json: false,
	timestamp: function () {
		return (new Date).toString();
	},
	formatter: function (options) {
		// Return string will be passed to logger.
		return options.timestamp() + ' '
			+ '[' + options.level.toUpperCase() + '] '
			+ (undefined !== options.message ? options.message : '')
			+ (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
	},
	filename: `${debugLogDir}/debug.log`,
});

export const Logger = new (winston.Logger)({
	levels: (winston.config.syslog.levels),
	transports: [
		// Console
		new (winston.transports.Console)({
			level: 'debug',
			colorize: true,
		}),
		// App.log
		appLogger,
		// Debug.log
		debugLogger,
	]
});

