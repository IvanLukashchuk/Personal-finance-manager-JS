'use strict';

export default class LoginController {
	constructor(userService, $state){
        'ngInject';

		this.userService = userService;
		this.user = {};
		this.$state = $state;
	}

	login(){
		let user = this.user;
		let authorizedUser = this.userService.authorizeAndGetUser(user);
		if (authorizedUser){
            this.message = '';
            this.$state.go('cashflow.cashflows');
        } else {
            this.message = '*Wrong username or password!';
		}
	}
}