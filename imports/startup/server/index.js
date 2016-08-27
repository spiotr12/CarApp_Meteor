import { Meteor } from 'meteor/meteor';

import { Logger as Log } from '../../api/util/winston-logger';

import '../../api/cars/cars';
import '../../api/makes/makes';

// import { Cars } from '../../api/cars/cars';
// import { Makes } from '../../api/makes/makes';

Meteor.startup(() => {
	// code to run on server at startup
	Log.info('Server started in', process.env.NODE_ENV, 'mode');
	Log.debug('Debug is working in development mode');

	// var carmakeid = Cars.findOne().make_id;
	// console.log(carmakeid);
	// console.log(Makes.findOne({ _id: carmakeid }).name);

});