'use strict';

export default class OverviewController{
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
}