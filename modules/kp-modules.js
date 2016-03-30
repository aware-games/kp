var mainModule, mapModule, pagesModule, directivesModule, routesModule;
(function() {
	mainModule = angular.module("kp.main", [ "angular-loading-bar" ]);
	mapModule = angular.module("kp.map", [ "ngMap" ]);
	pagesModule = angular.module("kp.pages", [ "angular.css.injector", "angular-timeline" ]);
	directivesModule = angular.module("kp.directives", []);
	routesModule = angular.module("kp.routes", [ "ngRoute" ]);
})();