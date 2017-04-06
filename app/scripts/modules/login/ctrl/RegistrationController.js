'use strict';

export default class RegistrationController {
	constructor(userService, $state){
        'ngInject';

		this.userService = userService;
		this.user = {};
		this.$state = $state;
	}

	register() {
        let user = this.user;
        if (user.pass === user.pass2) {
        	this.userService.users.push({name: user.name, email: user.email, pass: user.pass})
			this.$state.go("login")
    	} else {
        	this.message = "Passwords mismatch"
		}
	}
}