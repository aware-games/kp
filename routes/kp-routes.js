(function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider

		.when('/audio', {
			templateUrl: 'views/layout/audio.html',
			controller: 'AudioController'
		})

		.when('/historia', {
			templateUrl: 'views/layout/history.html',
			controller: 'HistoryController',
			resolve: {
				events: function($http) {
					return $http.get('assets/history-events.json').then(function(res) {
						return res.data.events;              
					});
				},
				infoTexts: function($http) {
					return $http.get('assets/history-infotexts.json').then(function(res) {
						return res.data;
					});
				},
				images: function($http) {
					return $http.get('assets/history-images.json').then(function(res) {
						return res.data;
					});
				},
				questions: function($http) {
					return $http.get('assets/history-questions.json').then(function(res) {
						return res.data;
					});
				}
			}
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

		.when('/ammatteja', {
			templateUrl: 'views/layout/work.html',
			controller: 'WorkController',
			resolve: {
				infoTexts: function($http) {
					return $http.get('assets/work-infotexts.json').then(function(res) {
						return res.data;
					});
				},
				images: function($http) {
					return $http.get('assets/work-images.json').then(function(res) {
						return res.data;
					});
				},
				questions: function($http) {
					return $http.get('assets/work-questions.json').then(function(res) {
						return res.data;
					});
				}
			}
		});
	}]);
})(routesModule);