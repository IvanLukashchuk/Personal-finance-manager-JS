'use strict';

export default class CashflowController{
	constructor(cashflow, $state){
        'ngInject';

		this.cashflow = cashflow;

		if(!this.cashflow){
			$state.go('cashflow.cashflows');
		}
	}
}