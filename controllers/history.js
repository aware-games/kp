(function(app) {
	app.controller("HistoryController", function($scope, cssInjector) {
		var history = this;
		
		history.showBlock = "buttons";
		
		cssInjector.add("css/history.css");
//		cssInjector.add("bower_components/angular-timeline/dist/angular-timeline.css");

		history.events = [ {
			badgeClass : 'info',
			badgeIconClass : 'glyphicon-info-sign',
			title : 'Vaasa perustettiin',
			content : 'Lorem ipsum dolor sit amet.',
			date : '1606-10-02'
		}, {
			badgeClass : 'warning',
			badgeIconClass : 'glyphicon-warning-sign',
			title : 'Kesä on kuuma ja kuiva',
			content : 'Lorem ipsum dolor sit amet.',
			date : '1852-01-01'
		}, {
			badgeClass : 'danger',
			badgeIconClass : 'glyphicon-fire',
			title : 'Vaasa palaa',
			content : 'Lorem ipsum dolor sit amet.',
			date : '1852-08-03'
		} ];
		
		history.show = function(view) {
			if (view == '') {
				history.showBlock = "buttons";
			}
			else {
				history.showBlock = view;
			}
		};
		
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
	});
})(pagesModule);