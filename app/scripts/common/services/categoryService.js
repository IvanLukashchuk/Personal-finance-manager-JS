'use strict';

export default class ManagerService{
    constructor($timeout){
        'ngInject';

        this.$timeout = $timeout;
        this.categories = {
            income: [
                'salary',
                'other'
            ],
            consumption: [
                'food',
                'entertainment',
                'rent',
                'other'
            ]
        };
    }

}