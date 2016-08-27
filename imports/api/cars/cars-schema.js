import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Makes } from '../makes/makes';

export const CarsSchema = new SimpleSchema({
	_id: {
		type: Meteor.Collection.ObjectID,
		label: 'id',
		autoValue: function () {
			if (this.isInsert) {
				return new Meteor.Collection.ObjectID();
			}
		},
		autoform: {
			omit: true,	// for autoValue to take an effect
		},
	},
	make_id: {
		type: Meteor.Collection.ObjectID,
		label: 'Car make',
		autoform: {
			type: "select",
			options: function () {
				return Makes.find().map(function (makeItem) {
					return { label: makeItem.name, value: makeItem._id._str };
				});
			},

		}
	},
	model: {
		type: String,
		label: 'Car model',
	},
	age: {
		type: Number,
		label: 'Car age',
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
		label: 'Created at',
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
		label: 'Modified at',
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
