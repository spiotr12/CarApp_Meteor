import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cars } from '../../../api/cars/cars';

import './cars-list.html';

Template.cars_list.onCreated(function carsListOnCreated() {
	console.log('carslistoncreated');
	Meteor.subscribe('carsCollection');
});

Template.cars_list.helpers({
	cars(){
		return Cars.find();
	}
});