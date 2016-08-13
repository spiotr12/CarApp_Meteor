import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import templates
import '../../ui/layouts/app-body';
import '../../ui/pages/cars-page';

// Home
FlowRouter.route('/', {
	name: 'App.home',
	action(params, queryParams) {
		BlazeLayout.render('App_body');
		console.log("Params:", params);
		console.log("Query Params:", queryParams);
	}
});

// Cars list
FlowRouter.route('/cars',{
	name: 'Cars.home',
	action(){
		BlazeLayout.render('App_body', {main: 'cars_page'});
	}
});