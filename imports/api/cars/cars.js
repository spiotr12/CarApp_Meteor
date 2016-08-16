import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Schema } from '../schema';

export const Cars = new Mongo.Collection('cars', {idGeneration: 'Mongo'});

// Attach schema
Cars.attachSchema(Schema.cars);

if(Meteor.isServer){
	// Meteor publication that pushed data from server to client
	Meteor.publish('carsCollection',function carsPublication(){
		return Cars.find();
	});
}
