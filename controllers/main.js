(function(module) {
	module.controller("MainController", function($location, $scope) {
		var main = this;
		
		main.showView = function(view) {
			$location.path(view);
		}
		
		main.setLevel = function(level) {
			app.setLevel(level);
		}
	});
	
	module.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = true;
	}]);
	module.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeBar = true;
	}]);
})(mainModule);