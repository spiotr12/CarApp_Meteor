import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cars } from '../../../api/cars/cars';

import './cars-list.html';

Template.cars_list.onCreated(function carsListOnCreated() {
	Meteor.subscribe('cars');
});

Template.cars_list.helpers({
	cars(){
		return Cars.find();
	}
});