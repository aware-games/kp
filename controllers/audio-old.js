(function(module) {
	module.controller("AudioController", function($scope, cssInjector, ngAudio) {
		var audio = this;
		
		cssInjector.add("css/audio.css");
		
		$scope.piga = ngAudio.load("audio/piika.mp3");
		$scope.lassel = ngAudio.load("audio/lassel.mp3");
		$scope.aspelin = ngAudio.load("audio/aspelin.mp3");
		$scope.vora = ngAudio.load("audio/voyrilainen.mp3");
		
		audio.getIcon = function(audioObj) {
			if (audioObj.paused) {
				return "play";
			}
			else {
				return "pause";
			}
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