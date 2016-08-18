import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Schema = {
	cars: new SimpleSchema({
		_id: {
			type: Meteor.Collection.ObjectID,
			label: 'id',
			optional: true,
			autoValue: function () {
				if (this.isInsert) {
					//TODO: generate ObjectId with now/current timestamp;
					return new Meteor.Collection.ObjectID();
				} else if (this.isUpdate){
					console.log('TODO: car _id on update autoValue');
				} else {
					console.log('TODO: car _id on else autoValue')
				}
			},
			autoform: {
				omit: true,	// for autoValue to take an effect
			}
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
			min: 0,
		}
	}),
};