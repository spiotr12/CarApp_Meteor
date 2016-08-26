"use strict";
import { Meteor } from 'meteor/meteor';

// prepare
let logger;
const env = process.env.NODE_ENV;

const logFormat = function (options) {
	// let space = '\t\t\t\t\t\t\t\t\t\t\t';	// 11 tabs

	return options.timestamp() + ' '
		+ '[' + options.level.toUpperCase() + '] '
		+ (undefined !== options.message ? options.message : '')
		+ (options.meta && Object.keys(options.meta).length ? '\n' + JSON.stringify(options.meta, null, '\t') : '' );
}

if (Meteor.isServer) {

	// Import npm packages
	let winston = Npm.require('winston');
	let fs = Npm.require('fs');

	const debugLogDir = '../../../../logs-debug';
	const logDir = 'logs';	// use this logDir to have new log every time server is build (development) (?)

	// Create the app log directory if it does not exist
	if (!fs.existsSync(logDir)) {
		console.log('Directory \"logs\" for app.log is missing. Creating logDir');
		fs.mkdirSync(logDir);
	}

	if (env === 'development') {
		// Create the debug log directory if it does not exist
		if (!fs.existsSync(debugLogDir)) {
			console.log('Directory \"logs-debug\" for debug.log is missing. Creating debugLogDir');
			fs.mkdirSync(debugLogDir);
		}
	}

	// Setup custom logger

	logger = new (winston.Logger)({
		levels: (winston.config.syslog.levels),
		// (winston.config.syslog.levels):	emerg=0, alert=1, crit=2, error=3, warning=4, notice=5, info=6, debug=7
	});


	// Prepare custom transports

	const appLoggerOptions = {
		name: 'app-logger',
		level: 'info',
		json: false,
		timestamp: function () {
			return (new Date).toString();
		},
		formatter: function (options) {
			// Return string will be passed to logger.
			return logFormat(options);
		},
		filename: `${logDir}/app.log`,
	};

	const debugLoggerOptions = {
		name: 'debug-logger',
		level: 'debug',
		json: false,
		timestamp: function () {
			return (new Date).toString();
		},
		formatter: function (options) {
			// Return string will be passed to logger.
			return logFormat(options);
		},
		filename: `${debugLogDir}/debug.log`,
	};

	const constoleLoggerOptions = {
		level: env === 'development' ? 'debug' : 'info',
		colorize: true,
	}

	// add transports
	logger.add(winston.transports.Console, constoleLoggerOptions);
	logger.add(winston.transports.File, appLoggerOptions);

	if (env === 'development') {
		logger.add(winston.transports.File, debugLoggerOptions);
	}
}

// Export Logger
export const Logger = logger;
