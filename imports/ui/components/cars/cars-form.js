import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';

import { Cars } from '../../../api/cars/cars';
import { Makes } from '../../../api/makes/makes';

import './cars-form.html';

AutoForm.debug();

Template.cars_form.onCreated(function carsFormOnCreated() {
	// Meteor.subscribe('cars');
	// Meteor.subscribe('makes');
});

Template.cars_form.helpers({
	carsCollection(){
		return Cars;
	},
	makesOptions(){
		return Makes.find().map(function (makeItem) {
			return { label: makeItem.name, value: makeItem._id._str };
		});
	}
});

AutoForm.hooks({
	insertCarAutoForm: {
		before: {
			method: function (doc) {
				doc.make_id = new Meteor.Collection.ObjectID(doc.make_id);
				this.result(doc);
			}
		}
	}
});