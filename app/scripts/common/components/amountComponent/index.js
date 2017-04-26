'use strict';

import componentTemplate from './amiunt-component.html';
import componentController from './amountComponentController.js';

export default {
    template: componentTemplate,
    controller: componentController,
    controllerAs: 'ctrl',
    bindings: {
        amount: '<'
    }
};