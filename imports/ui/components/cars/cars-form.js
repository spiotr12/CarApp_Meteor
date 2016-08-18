import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { AutoForm } from 'meteor/aldeed:autoform';

import { Schema } from '../../../api/util/schema';
import { Cars } from '../../../api/cars/cars';

import './cars-form.html';

AutoForm.debug();

Template.cars_form.onCreated(function carsFormOnCreated(){
	Meteor.subscribe('carsCollection');
});

Template.cars_form.helpers({
	carsSchema(){
		return Schema.cars;
	},
	carsCollection(){
		return Cars;
	},
	generateId(){
		return Meteor.Collection.ObjectID;
	}
});

// AutoForm.hooks({
// 	insertCarAutoForm: {
// 		onSubmit: function (doc) {
// 			console.log('submitting new car via onSubmit');
// 			console.log(doc);
//			this.done();
// 			return false;
// 		}
// 	}
// });