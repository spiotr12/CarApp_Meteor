import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const CarsSchema = new SimpleSchema({
	_id: {
		type: Meteor.Collection.ObjectID,
		label: 'id',
		autoValue: function () {
			if (this.isInsert) {
				return new Meteor.Collection.ObjectID();
			} else if (this.isUpdate) {
				// TODO: _id on update autoValue
				console.log('TODO: _id on update autoValue');
			} else {
				// TODO: car _id on else autoValue
				console.log('TODO: _id on else autoValue')
			}
		},
		autoform: {
			omit: true,	// for autoValue to take an effect
		},
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
		autoform: {
			afFieldInput: {
				type: "text",
				min: 0,
			}
		}
	},
	createdAt: {
		type: Date,
		label: 'createdAt',
		optional: true,
		autoValue: function () {
			if (this.isInsert) {	// on insert
				return new Date();
			}
		},
		autoform: {
			omit: true,	// for autoValue to take an effect
		},
	},
	modifiedAt: {
		type: Date,
		label: 'modifiedAt',
		optional: true,
		autoValue: function () {
			if (this.isUpdate) {	// on update
				return new Date();
			}
		},
		autoform: {
			omit: true,	// for autoValue to take an effect
		},
	},
});