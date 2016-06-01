(function() {
	'use strict';
	
	app = angular.module("kp-app", [ "kp.routes", "kp.main", "kp.map", "kp.pages", "kp.directives", "kp.video" ]);
	
	app.level = undefined;
	
	app.setLevel = function(level) {
		app.level = level;
	}
	
	app.checkLevel = function(callback) {
		if (app.level === undefined && app.checkOrientation()) {
			$("#level-modal").modal(
				{
					keyboard: false,
					backdrop: 'static'
				}
			);
		}
		if (callback !== undefined) {
			$("#level-modal").on("hidden.bs.modal", function(e) {
				callback();
			});
		}
	};
	
	app.checkOrientation = function() {
		return true;
//		return window == undefined || window.orientation == undefined ||
//				window.orientation == 90 || window.orientation == -90;
	};	
	
	angular.element(document).ready(function() {
		app.checkLevel();
	});
	
	angular.element(document).bind("orientationchange", function() {
		app.checkLevel();
	});
	
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/etusivu'});
	}]);
	app.config(function(cssInjectorProvider){
        cssInjectorProvider.setSinglePageMode(true);
    });
	
	app.run(function($rootScope){

		$rootScope
			.$on('$stateChangeStart', 
				function(event, toState, toParams, fromState, fromParams) { 
					
			});

		$rootScope
			.$on('$stateChangeSuccess',
				function(event, toState, toParams, fromState, fromParams) { 
					
			});

	});
})();