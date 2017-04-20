'use strict';

export default class CreateCashflowController{
	constructor(cashflowService, $state, categoryService){
        'ngInject';

        this.categoryService = categoryService;
        this.categories = categoryService.getCategories();
		this.cashflowService = cashflowService;
		this.cashflow = {type:'income', category:'', date: new Date()};
		this.$state = $state;
        this.isOpen = false;
	}

	addCashflow(){
		let cashflow = this.cashflow;
		this.cashflowService.addCashflow(cashflow);
		this.$state.go('cashflow.cashflows');
	}

	getCategories(type){
        return this.categoryService.getCategoriesByType(type);
	}
}