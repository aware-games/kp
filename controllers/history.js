(function(app) {
	app.controller("HistoryController", function($scope, cssInjector) {
		var history = this;
		
		history.showBlock = "buttons";
		
		cssInjector.add("css/history.css");
//		cssInjector.add("bower_components/angular-timeline/dist/angular-timeline.css");

		history.events = [ {
			badgeClass : 'info',
			badgeIconClass : 'glyphicon-info-sign',
			title : 'Vaasa perustuu',
			content : 'Lorem ipsum dolor sit amet.',
			date : '1606-10-02',
			visible : true
		}, {
			badgeClass : 'warning',
			badgeIconClass : 'glyphicon-warning-sign',
			title : 'Kesä on kuuma ja kuiva',
			content : 'Lorem ipsum dolor sit amet.',
			date : '1852-01-01',
			visible : true
		}, {
			badgeClass : 'danger',
			badgeIconClass : 'glyphicon-fire',
			title : 'Vaasa palaa',
			content : 'Lorem ipsum dolor sit amet.',
			date : '1852-08-03',
			visible : true
		} ];
		
		history.openTask = function() {
			history.showBlock = "buttons"; // TODO
		};
		
		history.openTimeline = function() {
			history.showBlock = "timeline";
		};
		history.closeTimeline = function() {
			history.showBlock = "buttons";
		};
		
		history.showInfo = function(event, id) {
			//$("#timeline-panel" + id).animate({width: 'toggle'});
			event.visible ^= true;
		};
	});
})(pagesModule);