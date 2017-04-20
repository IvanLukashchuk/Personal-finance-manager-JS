'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let loginModule = angular.module('app.login', []);

loginModule.config(routeConfig);

export default loginModule;