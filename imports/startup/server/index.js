import { Meteor } from 'meteor/meteor';

import { Logger as Log } from '../../api/winston-logger';

import '../../api/cars/cars';

Meteor.startup(() => {
	// code to run on server at startup
	Log.info('Server started');
});
