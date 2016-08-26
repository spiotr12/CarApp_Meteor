import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const MakesSchema = new SimpleSchema({
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
	name: {
		type: String,
		label: 'make_name',
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