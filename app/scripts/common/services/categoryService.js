'use strict';

export default class CategoryService{
    constructor($injector){
        'ngInject';

        this.$injector = $injector;
        this.categories = [
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
        ];
    }

    getCategories(){
        return this.categories.map((category) => category.type);
    }

    getCategoriesByType(type){
        for(let i = 0; i < this.categories.length; i++){
            let category = this.categories[i];
            if (category.type === type){
                return category.values;
            }
        }
        return [];
    }

    getCategoryByType(type){
            for(let i = 0; i < this.categories.length; i++){
                let category = this.categories[i];
                if (category.type === type){
                    return category;
                }
            }
        return null;
    }

    addCategory(type, category){
        this.getCategoriesByType(type).push(category);
        this.$injector.get('userService').update();
    }
}