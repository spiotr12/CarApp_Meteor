import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Schema = {
	Cars: new SimpleSchema({
		_id: {
			type: Meteor.Collection.ObjectID,
			label: 'id',
			optional: true,
		},
		make: {
			type: String,
			label: 'make',
		},
		model: {
			type: String,
			label: 'model',
		},
		age: {
			type: Number,
			label: 'age',
			optional: true,
		}
	}),
};