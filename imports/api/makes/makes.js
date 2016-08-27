import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Logger } from '../util/winston-logger';
import { MakesSchema } from './makes-schema';

export const Makes = new Mongo.Collection('makes', { idGeneration: 'MONGO' });

// Attach schema
Makes.attachSchema(MakesSchema);

if (Meteor.isServer) {
	// Meteor publication that pushed data from server to client
	Meteor.publish('makes', function carsPublication() {
		return Makes.find();
	});
}

Meteor.methods({
	'makes.insert'(doc){
		if (Meteor.isServer) {
			Logger.info('Registering new car make', doc);
			try {
				Makes.insert(doc);
			} catch (err){
				Logger.error(err);
				return;
			}
			Logger.info('Make added successfully');
		}
	},
});