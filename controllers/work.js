(function(module) {
	module.controller("WorkController", function($scope, $document, cssInjector, infoTexts, images, questions) {
		var work = this;
		$scope.work = work;

		work.view = "buttons";
		work.views = [
		              "profession",
		              "cobbler",
		              "hatmaker",
		              "tailor",
		              "blacksmith"
		              ];
		work.infoTexts = infoTexts;
		work.questions = questions;
		work.images = images;

		cssInjector.add("css/work.css");

		work.show = function(view) {
			if (view == '') {
				work.view = "buttons";
				$("#menu-back-btn").off("click");
				$(".content").removeClass("has-content");
			}
			else {
				work.view = view;
				$("#menu-back-btn").on("click", function() {
					work.closeSubView();
					return false;
				});
				$(".content").addClass("has-content");
			}
		};
		
		work.closeSubView = function() {
			work.show('');
			$scope.$apply();
		}
		
		$document.on("keydown", function(e) {
			if (e.which === 8 && (e.target.nodeName !== "INPUT" && e.target.nodeName !== "SELECT")) {
				if (work.view != "buttons") {
					work.closeSubView();
					e.preventDefault();
				}
			}
		});
		
		work.getInfoText = function(view) {
			return work.infoTexts[app.level][view];
		}
		
		work.hasImage = function(view) {
			return work.images[app.level][view] != "";
		}
		
		work.getImage = function(view) {
			return work.images[app.level][view];
		}
		
		work.getQuestions = function(view) {
			return work.questions[app.level][view];
		}
	});
})(pagesModule);