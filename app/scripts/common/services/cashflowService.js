'use strict';

export default class CashflowService{
    constructor($injector, categoryService){
        'ngInject';

        this.categoryService = categoryService;
        this.$injector = $injector;
        this.cashflowList = [{
            id: 0,
            type: 'income',
            date: new Date(),
            category: 'Salary',
            amount: 459.654,
            currency: 'UAH'
        },{
            id: 1,
            type: 'expense',
            date: new Date(),
            category: 'Food',
            amount: -12.45,
            currency: 'UAH'
        }];
    }

    getCashflowsList(){
        return this.cashflowList.sort((a,b) =>
            {return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1});
    }

    saveCashflow(id, cashflow){
        this.multiplyAmount(cashflow);
        this.cashflowList[id] = cashflow;
        this.$injector.get('userService').update();
    }

    addCashflow(cashflow){
        this.multiplyAmount(cashflow);
        this.cashflowList.unshift(cashflow);
        this.$injector.get('userService').update();
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
        return Math.round(total * 100) / 100;
    }

    totalInflow(cashflowList) {
        let total = 0;
        for (let i = 0; i < cashflowList.length; i++) {
            if (cashflowList[i].amount > 0) {
                total += cashflowList[i].amount;
            }
        }
        return Math.round(total * 100) / 100;
    }

    totalOutflow(cashflowList) {
        let total = 0;
        for (let i = 0; i < cashflowList.length; i++) {
            if (cashflowList[i].amount < 0) {
                total += cashflowList[i].amount;
            }
        }
        return Math.round(total * 100) / 100;
    }

    getAmountByCategory(category){
        let total = 0;
        for (let i = 0; i < this.cashflowList.length; i++) {
            let cashflow = this.cashflowList[i];
            if (cashflow.category === category) {
                total += cashflow.amount;
            }
        }
        return Math.round(total * 100) / 100;
    }
}