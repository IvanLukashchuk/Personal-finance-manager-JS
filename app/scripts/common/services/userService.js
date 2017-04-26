'use strict';

export default class UserService{
	constructor(categoryService, cashflowService) {
        'ngInject';

        this.categoryService = categoryService;
        this.cashflowService = cashflowService;
        this.user = {
            name: 'user',
            pass: 'user',
            categories: [
                {
                    type: 'income',
                    multiplier: 1,
                    values: [
                        'Salary',
                        'Passive',
                        'Deposit'
                    ]
                },
                {
                    type: 'expense',
                    multiplier: -1,
                    values: [
                        'Food',
                        'Entertainment',
                        'Rent',
                        'Transport'
                    ]
                }
            ],
            cashflowList: [{
                type: 'income',
                date: new Date('2017-04-21'),
                category: 'Salary',
                amount: 459.654
            }, {
                date: new Date('2017-03-21'),
                category: 'Salary',
                amount: 459.654
            }, {
                type: 'expense',
                date: new Date('2017-03-24'),
                category: 'Food',
                amount: -12.45
            }, { type: 'expense',
                date: new Date('2017-02-14'),
                category: 'Food',
                amount: -12.45
            }, {
                date: new Date('2017-02-21'),
                category: 'Salary',
                amount: 459.654
            }, {
                date: new Date('2017-01-21'),
                category: 'Salary',
                amount: 459.654
            }, {
                type: 'expense',
                date: new Date('2017-02-04'),
                category: 'Food',
                amount: -31.45
            }]
        };
        if (!localStorage.getItem(this.user.name)) {
			localStorage.setItem(this.user.name, JSON.stringify(this.user));
		}
	}

	addUser(user){
        user.categories = this.user.categories;
        user.cashflowList = [];
        localStorage.setItem(user.name, JSON.stringify(user));
	}

	update(){
        localStorage.setItem(this.authorizedUser.name, JSON.stringify(this.authorizedUser));
	}

    authorizeAndGetUser(user){
        let loadedUser = localStorage.getItem(user.name);
        if (loadedUser){
             let storedUser = JSON.parse(loadedUser);
             if (user.name === storedUser.name && user.pass === storedUser.pass){
             	this.authorizedUser = storedUser;
             	this.categoryService.categories = storedUser.categories;
             	this.cashflowService.cashflowList = storedUser.cashflowList;
             	return storedUser;
			 }
		}
        this.authorizedUser = undefined;
		return undefined;
    }
}