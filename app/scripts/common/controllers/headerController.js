'use strict';

export default class HeaderController{
	constructor($state, userService){
        'ngInject';

		let states = $state.get();
		console.log(states);
		this.states = states.filter((state) =>{
			if (!state.permission || userService.authorizedUser && state.permission === userService.authorizedUser.permission) {
                return state.title;
            }
		});
	}
}