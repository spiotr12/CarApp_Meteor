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

			// if(!Cars.simpleSchema().namedContext('insertingCar').validateOne(doc, "make")){
			// 	Logger.warning('Make not valid in', doc);
			// 	return;
			// }
			// if(!Cars.simpleSchema().namedContext('insertingCar').validateOne(doc, "model")){
			// 	Logger.warning('Model not valid in', doc);
			// 	return;
			// }
			// if(!Cars.simpleSchema().namedContext('insertingCar').validateOne(doc, "age")){
			// 	Logger.warning('Age not valid in', doc);
			// 	return;
			// }

			// Perform validation since the schema is attached. Uses autoValues as well
			Cars.insert(doc);	//TODO: catch error and log it
			Logger.info('Car added successfuly');
		}
	}
});