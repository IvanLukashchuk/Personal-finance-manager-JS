'use strict';

export default class ManagerService{
    constructor($timeout){
        'ngInject';

        this.$timeout = $timeout;
        this.entry = [{
            type: 'income',
            date: '06-04-2017',
            category: 'food',
            amount: 459.654,
            currency: 'UAH'
        },{
            type: 'consumption',
            date: '06-04-2017',
            category: 'food',
            amount: 12.45,
            currency: 'UAH'
        }
        ];
    }

}