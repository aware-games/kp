(function(module) {
	module.controller("MapController", function($scope, uiGmapGoogleMapApi) {
		var map = this;
		
		map.center = { latitude: 63.073928, longitude: 21.722566 };
		map.zoom = 15;
		map.options = {
			styles: [
 			         {
						featureType : "poi",
						elementType : "labels",
						stylers : [ {
							visibility : "off"
						} ]
					}
			]
		};
		
		var Marker = function(lat, long, title, description, img) {
			var parent = this;
			this.coords = { latitude: lat, longitude: long };
			this.title = title;
			this.description = description;
			this.image = img;
			this.options = {
				draggable: false
			}
			this.events = {
				click: function(marker, eventName, model, event) {
					parent.windowOptions.visible = !parent.windowOptions.visible;
				}
			}
			this.windowOptions = {
				visible: false
			}
			this.closeWindow = function() {
				this.windowOptions.visible = false;
			};
		}
		
		map.markers = [
		    new Marker(63.0751746, 21.7224761, "Pyhän Marian kirkko", "", "map-church.jpg"),
		    new Marker(63.0743583, 21.7232700, "Triviaalikoulu", "", "map-school.jpg"),
		    new Marker(63.0747314, 21.7229463, "Raatihuone", "", "map-townhall.jpg"),
		    new Marker(63.0722723, 21.7224731, "Wasastjerna", "", "map-ws.jpg"),
		    new Marker(63.0725272, 21.7222378, "Aurénin piha", "", "map-auren.jpg"),
		    new Marker(63.0749260, 21.7208401, "Kaupunginlääkärin talo", "", "map-doctor.jpg"),
		    new Marker(63.0735190, 21.7135850, "Läntinen tulliportti", "", "map-wtg.jpg"),
		    new Marker(63.0737720, 21.7292995, "Itäinen tulliportti", "", "map-etg.jpg"),
		    new Marker(63.0692909, 21.7242307, "Eteläinen tulliportti", "", "map-stg.jpg"),
		    new Marker(63.0764174, 21.7207049, "Pohjoinen tulliportti", "", "map-ntg.jpg"),
		    new Marker(63.0694683, 21.7211726, "Korsholman linna", "", "korsholms_slott.jpg"),
		    new Marker(63.0706079, 21.7316067, "Hovioikeus", "", "hovioikeus.jpg")
		];
		
		var Polygon = function(id, path, color, title, desc) {
			var parent = this;
			this.id = id;
			this.path = path;
			this.title = title;
			this.description = desc;
			this.stroke = {
				color : color,
				weight : 3
			};
			this.editable = false;
			this.draggable = false;
			this.geodesic = false;
			this.visible = true;
			this.fill = {
				color: "#000",
				opacity: 0.0
			};
		}
		
		map.polygons = [
		    new Polygon(
		    	1,
	    		[ {
					latitude : 63.076488,
					longitude : 21.711676
				}, {
					latitude : 63.0683834,
					longitude : 21.7182023
				}, {
					latitude : 63.0697473,
					longitude : 21.7320961
				}, {
					latitude : 63.0777137,
					longitude : 21.7260762
				} ],
				"#000"
		    )
		];
		
		map.fitImages = function() {
			$(".gm-style-iw img").each(function() {
				var h = $(this).parent().parent().height();
				h -= 40;
				$(this).css("max-height", h + "px");
			});
		};
		
		// uiGmapGoogleMapApi is a promise.
	    // The "then" callback function provides the google.maps object.
	    uiGmapGoogleMapApi.then(function(maps) {
	    	map.map = { center: map.center, zoom: map.zoom };
	    });
	});
	
	module.config(function(uiGmapGoogleMapApiProvider) {
	    uiGmapGoogleMapApiProvider.configure({
	        key: "AIzaSyBdlQZcIfg5IXbV6vDGLvHejWCFNJx6g-s",
	        v: "3", // defaults to latest 3.X anyhow
	        libraries: "weather,geometry,visualization"
	    });
	})
}(mapModule));