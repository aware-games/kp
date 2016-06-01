(function(module) {
	module.controller("HistoryController", function($scope, $document, cssInjector, events, infoTexts, images,
			questions) {
		var history = this;
		$scope.history = history;
		
		history.showBlock = "buttons";
		history.events = events;
		history.infoTexts = infoTexts;
		history.images = images;
		history.questions = questions;
		
		cssInjector.add("css/history.css");
		
		history.show = function(view) {
			if (view == '') {
				history.showBlock = "buttons";
				$("#menu-back-btn").off("click");
			}
			else {
				history.showBlock = view;
				$("#menu-back-btn").on("click", function() {
					history.closeSubView();
					return false;
				});
			}
		};
		
		history.closeSubView = function() {
			history.show('');
			$scope.$apply();
		}
		
		$document.on("keydown", function(e) {
			if (e.which === 8 && (e.target.nodeName !== "INPUT" && e.target.nodeName !== "SELECT")) {
				if (history.showBlock != "buttons") {
					history.closeSubView();
					e.preventDefault();
				}
			}
		});
		
		history.showInfo = function(event, id) {
			$("#timeline-panel" + id).animate({width: 'toggle'}, {done: function() {
				if ($(this).css("visibility") == "visible") {
					$(this).css({"display": "block", "visibility": "hidden"});
				}
				else {
					$(this).css({"display": "block", "visibility": "visible"});
				}
			}});
		};
		
		history.getInfoText = function(view) {
			return history.infoTexts[app.level][view];
		}
		
		history.hasImage = function(view) {
			return history.images[app.level][view] != "";
		}
		
		history.getImage = function(view) {
			return history.images[app.level][view];
		}
		
		history.getQuestions = function(view) {
			return history.questions[app.level][view];
		}
	});
})(pagesModule);