'use strict';

export default class CategoryService{
    constructor($timeout){
        'ngInject';

        this.$timeout = $timeout;
        this.categories = [
            {
                type: 'income',
                multiplier: 1,
                values: [
                    'salary',
                    'passive',
                    'other'
                ]
            },
            {
                type: 'expense',
                multiplier: -1,
                values: [
                    'food',
                    'entertainment',
                    'rent',
                    'other'
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
    }
}