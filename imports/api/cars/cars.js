import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Cars = new Mongo.Collection('cars', {idGeneration: 'Mongo'});

// Attach schema
// TODO: Cars.attachSchema(Schema.Cars);

if(Meteor.isServer){
	// Meteor publication that pushed data from server to client
	Meteor.publish('carsCollection',function carsPublication(){
		return Cars.find();
	});
}
