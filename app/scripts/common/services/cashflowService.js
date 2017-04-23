'use strict';

export default class CashflowService{
    constructor($timeout, categoryService){
        'ngInject';

        this.categoryService = categoryService;
        this.$timeout = $timeout;
        this.cashflowList = [{
            id: 0,
            type: 'income',
            date: new Date(),
            category: 'salary',
            amount: 459.654,
            currency: 'UAH'
        },{
            id: 1,
            type: 'expense',
            date: new Date(),
            category: 'food',
            amount: -12.45,
            currency: 'UAH'
        }
        ];
    }

    getCashflowsList(){
        return this.cashflowList;
    }

    saveCashflow(id, cashflow){
        this.multiplyAmount(cashflow);
        this.cashflowList[id] = cashflow;
    }

    addCashflow(cashflow){
        this.multiplyAmount(cashflow);
        this.cashflowList.push(cashflow);
    }

    multiplyAmount(cashflow){
        let category = this.categoryService.getCategoryByType(cashflow.type);
        cashflow.amount = cashflow.amount * category.multiplier;
    }

    getCashflow(id, list){
        if (list){
            return list[id];
        }
        return this.loadCashflow(id);
    }

    loadCashflow(id){
        return JSON.parse(JSON.stringify(this.cashflowList[id]));
    }

    total(cashflowList) {
        let total = 0;
        for (let i = 0; i < cashflowList.length; i++) {
            total += cashflowList[i].amount;
        }
        return total;
    }

    totalInflow(cashflowList) {
        let total = 0;
        for (let i = 0; i < cashflowList.length; i++) {
            if (cashflowList[i].amount > 0) {
                total += cashflowList[i].amount;
            }
        }
        return total;
    }

    totalOutflow(cashflowList) {
        let total = 0;
        for (let i = 0; i < cashflowList.length; i++) {
            if (cashflowList[i].amount < 0) {
                total += cashflowList[i].amount;
            }
        }
        return total;
    }
}