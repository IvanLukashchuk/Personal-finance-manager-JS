'use strict';

export default class CashflowListController{
	constructor(cashflowService, $state, cashflows, $uibModal, editTmpl, editCashflowCtrl){
        'ngInject';

        this.cashflowService = cashflowService
		this.cashflowList = cashflows;
		this.$uibModal = $uibModal;
		this.cashflowService = cashflowService;
		this.$state = $state;
		this.editTmpl = editTmpl;
		this.editCashflowCtrl = editCashflowCtrl;
		this.total = this.total();
		this.totalInflow = this.totalInflow();
		this.totalOutflow = this.totalOutflow();
		// this._isEmptyList();
	}

	// _isEmptyList(){
	// 	if (this.cashflowList.length === 0){
	// 		this.$state.go('cashflow.createCashflow');
	// 	}
	// }

    total(){
        return this.cashflowService.total(this.cashflowList);
    }

    totalInflow(){
        return this.cashflowService.totalInflow(this.cashflowList);
    }

    totalOutflow(){
        return this.cashflowService.totalOutflow(this.cashflowList);
    }

	open(id){
		let cashflowService = this.cashflowService;
		this.id = id;
        var modalInstance = this.$uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template: this.editTmpl,
            controller: this.editCashflowCtrl,
            controllerAs: 'ctrl',
            resolve: {
				cashflow: (cashflowService)=>{
                    'ngInject';
					return cashflowService.getCashflow(id);
				}
            }
        });

        modalInstance.result.then(function (selectedItem) {
            cashflowService.saveCashflow(id, selectedItem);
        });
	}

	getColor(amount){
	    if (amount >= 0){
	        return {color: 'green'}
        }
        return {color: 'red'}
    }
}














