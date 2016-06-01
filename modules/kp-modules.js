var app;
var mainModule, pagesModule, mapModule, directivesModule, routesModule, videoModule;
(function() {
	mainModule = angular.module("kp.main", [ "angular-loading-bar" ]);
	pagesModule = angular.module("kp.pages", [ "angular.css.injector", "angular-timeline", "ngAudio" ]);
	mapModule = angular.module("kp.map", [ "uiGmapgoogle-maps" ]);
	directivesModule = angular.module("kp.directives", []);
	routesModule = angular.module("kp.routes", [ "ngRoute" ]);
	videoModule = angular.module("kp.video", [ "ngSanitize", "com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls" ]);
})();