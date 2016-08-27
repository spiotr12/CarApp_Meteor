import { Meteor } from 'meteor/meteor';
import { Match } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.extendOptions({
	unique: Match.Optional(Boolean),
});

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
		label: 'Name of make',
		unique: true,
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