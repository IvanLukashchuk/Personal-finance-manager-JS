'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routeConfig from './common/config/routeConfig.js';
import userService from './common/services/userService.js';
import loginModule from './modules/login';

import uibModal from 'angular-ui-bootstrap/src/modal';
import ngMaterial from 'angular-material';


angular.module('app', [
	uiRouter,
    uibModal,
    loginModule.name,
    ngMaterial
])
.config(routeConfig)
.service('userService', userService)

.run(function($rootScope){
    'ngInject';

   $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) =>{
	   window.document.title = toState.title;
   });

	// $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
	//   console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
	// });
    //
	// $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
	//   console.log('$stateChangeError - fired when an error occurs during transition.');
	//   console.log(arguments);
	// });
    //
	// $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
	//   console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
	// });
    //
	// $rootScope.$on('$viewContentLoaded',function(event){
	//   console.log('$viewContentLoaded - fired after dom rendered',event);
	// });
    //
	// $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
	//   console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
	//   console.log(unfoundState, fromState, fromParams);
	// });
});