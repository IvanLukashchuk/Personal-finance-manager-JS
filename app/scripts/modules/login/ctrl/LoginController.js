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

			if (authorizedUser.permission === 'cashflow'){
                this.$state.go('cashflow.cashflows');
				return;
            }
            this.$state.go('home');
        }
	}
}