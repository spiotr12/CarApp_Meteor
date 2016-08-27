import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Cars } from '../../../api/cars/cars';
import { Makes } from '../../../api/makes/makes';

import './cars-list.html';

Template.cars_list.helpers({
	cars(){
		return Cars.find();
	},
	subsReady(){
		return FlowRouter.subsReady();
	},
});

Template.car_item.helpers({
	makesNames(id){
		return Makes.findOne({_id: id}).name;
	}
});