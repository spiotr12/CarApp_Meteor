import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';

import { Cars } from '../../../api/cars/cars';

import './cars-form.html';

// AutoForm.debug();

Template.cars_form.onCreated(function carsFormOnCreated(){
	Meteor.subscribe('cars');
});

Template.cars_form.helpers({
	carsCollection(){
		return Cars;
	},
});

AutoForm.hooks({
	insertCarAutoForm: {
		onSubmit: function(doc){
			// console.log('Adding new car (autoform)', doc);
			Meteor.call('cars.insert', doc);
			this.done();
			return false;
		},
	}
});