'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let cashflowModule = angular.module('app.cashflow', []);

cashflowModule.config(routeConfig);

export default cashflowModule;