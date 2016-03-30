(function() {
	'use strict';
	
	var app = angular.module("kp-app", [ "kp.routes", "kp.main", "kp.map", "kp.pages", "kp.directives" ]);
	
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/etusivu'});
	}]);
	app.config(function(cssInjectorProvider){
        cssInjectorProvider.setSinglePageMode(true);
    });
	
	app.run(function($rootScope){

	    $rootScope
	        .$on('$stateChangeStart', 
	            function(event, toState, toParams, fromState, fromParams){ 
	               // $("#ui-view").html("");
	                $(".page-loading").removeClass("hidden");
	        });

	    $rootScope
	        .$on('$stateChangeSuccess',
	            function(event, toState, toParams, fromState, fromParams){ 
	                $(".page-loading").addClass("hidden");
	        });

	});
})();