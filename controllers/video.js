(function(module, videogular) {
	module.controller("VideoController", ["$sce", "cssInjector", function ($sce, cssInjector) {
		var video = this;
		
		cssInjector.add("css/video.css");

		video.config = {
			sources: [
 				{
					src : $sce.trustAsResourceUrl("assets/ylivieska_kyrka.mp4"),
					type : "video/mp4"
				}
			],
			theme: "node_modules/videogular-themes-default/videogular.min.css"
		};
	}]);
})(pagesModule, videoModule);