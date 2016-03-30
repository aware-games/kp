(function(app) {
	app.controller("MapController", function(NgMap, $scope) {
		var map = this;
		
		map.center = [63.073928,21.722566];
		map.zoom = 16;
		
		map.markers = [
           { pos:[63.0751746,21.7224761], title: "Pyhän Marian kirkko", description: "" },
           { pos:[63.0742983,21.72331], title: "Triviaalikoulu", description: "" },
           { pos:[63.0747314,21.7229463], title: "Raatihuone", description: "" },
           { pos:[63.0722723,21.7222731], title: "Wasastjerna", description: "" },
           { pos:[63.0725272,21.7222378], title: "Aurénin piha", description: "" },
           { pos:[63.074926,21.7208401], title: "Kaupunginlääkärin talo", description: "" }
		];
		
		map.init = function(mapId) {
			map.map = NgMap.initMap(mapId);
		};
		
		map.showInfo = function(marker) {
			alert(marker.title);
		};

		map.test = function() {
			alert("test");
		};
		
		$scope.$on("$viewContentLoaded", function() {
			map.init('history-map');
		});
		
//		NgMap.getMap().then(function(map) {
//			console.log(map.getCenter());
//			console.log('markers', map.markers);
//			console.log('shapes', map.shapes);
//		});
	});
	
	$(document).ready(function() {
		$(".marker").on("click", function() {
			var index = $(this).data("id");
			console.log("index = " + index);
		});
	});
}(mapModule));