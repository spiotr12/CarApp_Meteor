import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Logger } from '../util/winston-logger';
import { CarsSchema } from './cars-schema';

export const Cars = new Mongo.Collection('cars', { idGeneration: 'Mongo' });

// Attach schema
Cars.attachSchema(CarsSchema);

if (Meteor.isServer) {
	// Meteor publication that pushed data from server to client
	Meteor.publish('cars', function carsPublication() {
		return Cars.find();
	});
}

Meteor.methods({
	'cars.insert'(doc){
		if (Meteor.isServer) {
			Logger.info('Adding new car:', doc);

			// Validating
			// Cars.simpleSchema().validate(doc);
			// Validation not necessary since

			Cars.insert(doc);
		}
	}
});