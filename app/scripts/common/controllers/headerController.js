'use strict';

export default class HeaderController{
	constructor($state, userService){
        'ngInject';

		let states = $state.get();
		console.log(states);
		this.states = states.filter((state) =>{
			if (!state.abstract && (state.permission === 'cashflow' && userService.authorizedUser) || state.permission !== 'cashflow') {
                return state.title;
            }
		});
	}
}