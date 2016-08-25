import { Meteor } from 'meteor/meteor';

import { Logger as Log } from '../../api/util/winston-logger';

import '../../api/cars/cars';

Meteor.startup(() => {
	// code to run on server at startup
	Log.info('Server started in', process.env.NODE_ENV, 'mode');
	Log.debug('Debug is working in development mode');
});