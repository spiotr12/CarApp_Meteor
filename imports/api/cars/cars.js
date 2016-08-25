import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Schema } from '../util/schema';
import { Logger } from '../util/winston-logger';

export const Cars = new Mongo.Collection('cars', { idGeneration: 'Mongo' });

// Attach schema
Cars.attachSchema(Schema.cars);

if (Meteor.isServer) {
	// Meteor publication that pushed data from server to client
	Meteor.publish('carsCollection', function carsPublication() {
		return Cars.find();
	});
}

Meteor.methods({
	'cars.insert'(doc){
		if (Meteor.isServer) {
			Logger.info('Adding new car:', doc);

			Cars.simpleSchema().validate(doc);

			Cars.insert(doc);
		}
	}
});