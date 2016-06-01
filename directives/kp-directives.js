(function(app) {
	app.directive("menu", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/menu.html"
		};
	});
	
	app.directive("tasks", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/tasks.html",
			scope: {
				questions: "=",
				view: "="
			}
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
			},
			controller: [ "$scope", function($scope) {
				$scope.$emit("render.completed");
			}]
		};
	});
}(directivesModule));