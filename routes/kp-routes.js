(function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider

		.when('/audio', {
			templateUrl: 'views/layout/audio.html',
			controller: 'AudioController'
		})

		.when('/copyright', {
			templateUrl: 'views/layout/copyright.html',
			controller: 'CopyrightController'
		})

		.when('/arki', {
			templateUrl: 'views/layout/everyday.html',
			controller: 'EverydayController'
		})

		.when('/historia', {
			templateUrl: 'views/layout/history.html',
			controller: 'HistoryController'
		})

		.when('/etusivu', {
			templateUrl: 'views/layout/main.html',
			controller: 'MainController'
		})

		.when('/kartta', {
			templateUrl: 'views/layout/map.html',
			controller: 'MapController'
		})

		.when('/video', {
			templateUrl: 'views/layout/video.html',
			controller: 'VideoController'
		})

		.when('/ammattikunnat', {
			templateUrl: 'views/layout/work.html',
			controller: 'WorkController'
		});
	}]);
})(routesModule);