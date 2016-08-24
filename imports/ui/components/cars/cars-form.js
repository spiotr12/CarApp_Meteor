import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';

import { Cars } from '../../../api/cars/cars';

import './cars-form.html';

AutoForm.debug();

Template.cars_form.onCreated(function carsFormOnCreated(){
	Meteor.subscribe('carsCollection');
});

Template.cars_form.helpers({
	carsCollection(){
		return Cars;
	},
});

// AutoForm.hooks({
// 	insertCarAutoForm: {
// 		//TODO
// 		onSubmit: function(){
// 			console.log('adding car');
// 			this.done();
// 			return false;
// 		},
// 	}
// });