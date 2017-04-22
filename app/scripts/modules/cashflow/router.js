'use strict';

import HeaderController from 'scripts/common/controllers/headerController.js';
import CreateCashflowCtrl from './create-cashflow/createCashflowController.js';
import CashflowListCtrl from './cashflow-list/cashflowListController.js';
import CashflowCtrl from './cashflow-view/cashflowController.js';
import editCashflowCtrl from './edit-cashflow/cashflowEditController.js';

import headerTemplate from  'views/header.html';
import cashflowsTemplate from  'views/cashflows.html';
import createCashflowTemplate from  'views/create-cashflow.html';
import cashflowTemplate from  'views/cashflow.html';
import editTmpl from 'views/edit-cashflow.html';


export default ($stateProvider)=>{
    'ngInject';

	let header = {
		template: headerTemplate,
		controller: HeaderController,
		controllerAs: 'ctrl'
	};

	$stateProvider
		.state('cashflow', {
			abstract: true,
			url: '/cashflow',
			views:{
		  		'header': header,
		  		'': {
				  	template: "<div><ui-view></ui-view></div>",
		  		}
		  	},
		  	resolve: {
		  		cashflows: (cashflowService)=>{
                    'ngInject';

		  			return cashflowService.getCashflowsList();
		  		},
				userAuthorized: ($state, userService, $q)=>{
                    'ngInject';

                    let deferred = $q.defer()
                    if(userService.authorizedUser){
                        deferred.resolve();
                    } else {
                        $state.go('login');
                        deferred.reject();
                    }
                    return deferred.promise;
                }
		  	},
			permission: 'cashflow'
		})
		.state('cashflow.cashflows', {
			url: '/cashflow-list',
			title: 'Cashflows list',
		  	template: cashflowsTemplate,
		  	controller: CashflowListCtrl,
		  	controllerAs: 'ctrl',
            permission: 'cashflow',
            resolve: {
                editCashflowCtrl:()=> {return editCashflowCtrl},
				editTmpl:()=> {return editTmpl}
     	   }

		})
		.state('cashflow.createCashflow', {
			url: '/cashflow-create',
			title: 'Create New Cashflow',
		  	template: createCashflowTemplate,
		  	controller: CreateCashflowCtrl,
		  	controllerAs: 'ctrl',
            permission: 'cashflow'
		})
		.state('cashflow.viewCashflow', {
			url: '/cashflow-list/:cashflowId',
		  	template: cashflowTemplate,
		  	controller: CashflowCtrl,
		  	controllerAs: 'ctrl',
		  	resolve: {
		  		cashflow: ($stateParams, cashflows, cashflowService, $state) =>{
                    'ngInject';

		  			let id = $stateParams.cashflowId;
		  			let cashflow = cashflowService.getCashflow(id, cashflows);

		  			if (!cashflow){
		  				return $state.go('home');
		  			}

		  			return cashflow;
		  		}
		  	},
        	permission: 'cashflow'
		});
}