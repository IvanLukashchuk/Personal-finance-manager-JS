'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let adminModule = angular.module('app.login', []);

adminModule.config(routeConfig);

export default adminModule;