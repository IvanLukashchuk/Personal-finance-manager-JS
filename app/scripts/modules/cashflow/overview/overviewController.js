'use strict';

export default class OverviewController{
    constructor(cashflowService, $state, categoryService, $stateParams){
        'ngInject';

        this.categoryService = categoryService;
        this.type = $stateParams.type;
        this.categories = categoryService.getCategories(this.type);
        this.cashflowService = cashflowService;
        this.$state = $state;

        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let date = new Date();
        let prevMonth1 = new Date();
        prevMonth1.setMonth(date.getMonth() - 1);
        let prevMonth2 = new Date();
        prevMonth2.setMonth(date.getMonth() - 2);

        this.labels = [monthNames[prevMonth2.getMonth()], monthNames[prevMonth1.getMonth()], monthNames[date.getMonth()]];
        this.series = this.categories;

        let cashflows = this.cashflowService.getCashflowsList();

        let i = 0;
        let i1 = 0;
        let i2 = 0;
        let e = 0;
        let e1 = 0;
        let e2 = 0;
        for (let j = 0; j < cashflows.length; j++){
            let cashflow = cashflows[j];
            let cfDate = new Date(cashflow.date);
            if (cfDate.getMonth() >= date.getMonth()){
                if(cashflow.amount > 0){
                    i += cashflow.amount;
                } else {
                    e -= cashflow.amount;
                }
            }
            if (cfDate.getMonth() >= prevMonth2.getMonth() && cfDate.getMonth() < prevMonth1.getMonth()){
                if(cashflow.amount > 0){
                    i1 += cashflow.amount;
                } else {
                    e1 -= cashflow.amount;
                }
            }
            if (cfDate.getMonth() >= prevMonth1.getMonth() && cfDate.getMonth() < date.getMonth()){
                if(cashflow.amount > 0){
                    i2 += cashflow.amount;
                } else {
                    e2 -= cashflow.amount;
                }
            }
        }

        this.data = [
            [i2, i1, i],
            [e2, e1, e]
        ];
    }



}