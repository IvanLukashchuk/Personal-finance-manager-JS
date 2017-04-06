'use strict';

import HeaderController from 'scripts/common/controllers/headerController.js';
import HomeCtrl from 'scripts/common/controllers/homeController.js';

import headerTemplate from 'views/header.html';
import homeTemplate from 'views/home.html';



export default ($stateProvider, $locationProvider, $urlRouterProvider)=>{
    'ngInject';

	let header = {
		template: headerTemplate,
		controller: HeaderController,
		controllerAs: 'ctrl'
	};

	$locationProvider.hashPrefix("!");

	$stateProvider
		.state('home', {
			url: '/home',
			title: 'Home',
		  	views: {
		  		'header': header,
		  		'': {
				  	template: homeTemplate,
				  	controller: HomeCtrl,
				  	controllerAs: 'ctrl',
		  		}
		  	}
		});

	$urlRouterProvider.otherwise('/home');
}