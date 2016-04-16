(function(app) {
	app.controller("AudioController", function($scope, cssInjector, ngAudio) {
		var audio = this;
		
		cssInjector.add("css/audio.css");
		
		$scope.piga = ngAudio.load("audio/test1.mp3");
		$scope.lassel = ngAudio.load("audio/test2.ogg");
		$scope.aspelin = ngAudio.load("audio/test3.ogg");
		$scope.vora = ngAudio.load("audio/test4.wav");
		
		audio.getIcon = function(audioObj) {
			if (audioObj.paused) {
				return "play";
			}
			else {
				return "pause";
			}
		}
	});
})(pagesModule);