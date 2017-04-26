'use strict';

export default class AmountComponentController{
	constructor(){
	}

    getColor(amount){
        if (amount >= 0){
            return {color: 'green'}
        }
        return {color: 'red'}
    }
}

