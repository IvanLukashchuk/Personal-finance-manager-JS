'use strict';

import HeaderController from 'scripts/common/controllers/headerController.js';
import LoginController from './ctrl/loginController.js';
import RegistrationController from './ctrl/registrationController.js';

import loginTemplate from 'views/login.html';
import headerTemplate from  'views/header.html';
import registrationTemplate from 'views/registration.html';

export default ($stateProvider)=>{
    'ngInject';

	let header = {
		template: headerTemplate,
		controller: HeaderController,
		controllerAs: 'ctrl'
	};

	$stateProvider
		.state('login', {
			url: '/login',
			title: 'Login',
			views:{
		  		'header': header,
		  		'': {
				  	template: loginTemplate,
                    controller: LoginController,
                    controllerAs: 'ctrl'
		  		}
		  	}
		})
		.state('registration', {
        url: '/registration',
        title: 'Registration',
        views:{
            'header': header,
            '': {
                template: registrationTemplate,
                controller: RegistrationController,
                controllerAs: 'ctrl'
            }
        }
    });
}