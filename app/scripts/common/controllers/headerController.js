'use strict';

export default class HeaderController{
	constructor($state, userService){
        'ngInject';

		let states = $state.get();
		console.log(states);
		this.states = states.filter((state) =>{
			if (!state.abstract) {
                return state.title;
            }
		});
	}
}