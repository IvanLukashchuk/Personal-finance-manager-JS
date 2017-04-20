'use strict';

export default class CashflowEditController{
    constructor($uibModalInstance, cashflow, categoryService){
        'ngInject';

        this.categoryService = categoryService;
        this.categories = categoryService.getCategories();
        this.$uibModalInstance = $uibModalInstance;
        this.cashflow = cashflow;
    }

    ok() {
        this.$uibModalInstance.close(this.cashflow);
    };

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    };

    getCategories(type){
        return this.categoryService.getCategoriesByType(type);
    }
}







