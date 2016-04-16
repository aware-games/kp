(function(app) {
	app.directive("menu", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/menu.html"
		};
	});
	
	app.directive("church", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/church.html"
		};
	});
	
	app.directive("school", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/school.html"
		};
	});
	
	app.directive("tasks", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/tasks.html"
		};
	});
	
	app.directive("audiocell", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/audio-cell.html",
			scope: {
				header: "@header",
				ctrl: "=",
				cid: "=",
				audio: "="
			}
		};
	});
}(directivesModule));