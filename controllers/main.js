(function(app) {
	app.controller("MainController", function($location, $scope) {
		var main = this;
		
		main.showView = function(view) {
			$location.path(view);
		}
		
//		$scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//		    if (toState.resolve) {
//		        $scope.showSpinner();
//		    }
//		});
//		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
//		    if (toState.resolve) {
//		        $scope.hideSpinner();
//		    }
//		});
//		
//		
	});
	
	app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = true;
	}]);
	app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeBar = true;
	}]);
})(mainModule);