'use strict';

export default ($injector)=>{
	'ngInject';

    $injector.get('$rootScope').$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
    	window.document.title = toState.title;
	});
}