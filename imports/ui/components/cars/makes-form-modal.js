import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AutoForm } from 'meteor/aldeed:autoform';

import { Makes } from '../../../api/makes/makes';

import './makes-form-modal.html';

Template.make_insert_modal.helpers({
	makesCollection(){
		return Makes;
	},
});

Template.makes_list.helpers({
	makesList(){
		return Makes.find();
	},
});