(function(app) {
	app.directive("menu", function() {
		return {
			restrict: 'E',
			templateUrl: "views/includes/menu.html"
		};
	});
}(directivesModule));