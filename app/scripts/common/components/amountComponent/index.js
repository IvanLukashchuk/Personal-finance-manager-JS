'use strict';

import componentTemplate from 'scripts/common/components/amountComponent/amount-component.html';
import componentController from 'scripts/common/components/amountComponent/amountComponentController.js';

export default {
    template: componentTemplate,
    controller: componentController,
    controllerAs: 'ctrl',
    bindings: {
        amount: '<'
    }
};