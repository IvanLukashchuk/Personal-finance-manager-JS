'use strict';

export default class HomeController{
	constructor(){
		this.items = [];
	}

	addItem(){
		this.items.push({
			text: this.text
		});

		this.text = '';
	}
}