(function(app) {
	app.controller("WorkController", function($scope, cssInjector) {
		var work = this;
		
		cssInjector.add("css/work.css");
	});
})(pagesModule);