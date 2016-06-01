(function(module) {
	module.controller("AudioController", function($scope, $sce, cssInjector) {
		var audio = this;
		
		cssInjector.add("css/audio.css");

		$scope.piika = [{
			src : $sce.trustAsResourceUrl("audio/piika.mp3"),
			type : "audio/mp3"
		}];
		$scope.lassel = [{
			src : $sce.trustAsResourceUrl("audio/lassel.mp3"),
			type : "audio/mp3"
		}];
		$scope.aspelin = [{
			src : $sce.trustAsResourceUrl("audio/aspelin.mp3"),
			type : "audio/mp3"
		}];
		$scope.vora = [{
			src : $sce.trustAsResourceUrl("audio/voyrilainen.mp3"),
			type : "audio/mp3"
		}];

		audio.theme = {
			url : "http://www.videogular.com/styles/themes/default/latest/videogular.css"
		}
		
		$scope.$on("render.completed", function() {
			$(".collapse").each(function() {
				$(this).on("show.bs.collapse", function() {
					$(this).parent().parent().css({ "z-index": 1 });
				});
				$(this).on("hidden.bs.collapse", function() {
					$(this).parent().parent().css({ "z-index": 0 });
				});
			});
		});
	});
})(pagesModule);