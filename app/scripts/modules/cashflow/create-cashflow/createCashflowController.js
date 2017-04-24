'use strict';

export default class CreateCashflowController{
	constructor(cashflowService, $state, categoryService, $stateParams){
        'ngInject';

        this.categoryService = categoryService;
        this.type = $stateParams.type;
        this.categories = this.getCategories(this.type);
		this.cashflowService = cashflowService;
		this.cashflow = {type:this.type, category:'', date: new Date()};
		this.$state = $state;
        this.isOpen = false;
	}

	addCashflow(){
		let cashflow = this.cashflow;
		if (!cashflow.category){
            cashflow.category = this.searchText;
            this.categoryService.addCategory(this.type, this.searchText);
		}
		this.cashflowService.addCashflow(cashflow);
		this.$state.go('cashflow.cashflows');
	}

	getCategories(type){
        return this.categoryService.getCategoriesByType(type);
	}

    querySearch(query) {
        return query ? this.categories.filter( this.createFilterFor(query) ) : this.categories;
    }

    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.indexOf(lowercaseQuery) === 0);
        };
    }
}