'use strict';

export default class CategoriesController{
	constructor(cashflowService, $state, categoryService){
        'ngInject';

        this.cashflowService = cashflowService;
		this.$state = $state;
		this.categoryService = categoryService;
	}


    getAmountByCategory(item){
        return this.cashflowService.getAmountByCategory(item);
	}
}














