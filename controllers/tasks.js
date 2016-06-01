(function(module) {
	module.controller("TasksController", function($scope, cssInjector) {
		var tasks = this;
		
		cssInjector.add("css/tasks.css");
		
		tasks.view = $scope.view;
		tasks.isShowingAllQuestions = false;
		
		tasks.scoresheet = 0;
		tasks.getScoresheet = function() {
			return tasks.scoresheet + "/" + tasks.questions.length;
		}

		tasks.questions = $scope.questions;
		
		tasks.checkAnswer = function(question, answer) {
			var correctAnswer = tasks.questions[question].correctAnwser;
			var elPrefix = "#" + tasks.view + "_" + question + "_";

			if (answer == correctAnswer) {
				$(elPrefix + answer).addClass("btn-success");
				tasks.scoresheet++;
			}
			else {
				$(elPrefix + answer).addClass("btn-danger");
				$(elPrefix + correctAnswer).addClass("btn-success");
			}
			$(elPrefix + answer).removeClass("btn-default");
		}
		
		tasks.currentQuestion = 0;
		
		tasks.isCurrentQuestion = function(qid) {
			return tasks.currentQuestion == qid;
		}
		
		tasks.gotoNextQuestion = function() {
			if (tasks.currentQuestion + 1 == tasks.questions.length) {
				tasks.currentQuestion = 0;
			}
			else {
				tasks.currentQuestion++;
			}
		}
		
		tasks.gotoPreviousQuestion = function() {
			if (tasks.currentQuestion - 1 == -1) {
				tasks.currentQuestion = tasks.questions.length - 1;
			}
			else {
				tasks.currentQuestion--;
			}
		}
		
		tasks.hasAnsweredQuestion = function(question) {
			var correctAnswer = tasks.questions[question].correctAnwser;
			var el = "#" + tasks.view + "_" + question + "_" + correctAnswer;
			return $(el).hasClass("btn-success");
		}
		
		tasks.canGotoPrevious = function() {
			return tasks.currentQuestion - 1 > -1;
		}
		
		tasks.canGotoNext = function() {
			return tasks.currentQuestion + 1 < tasks.questions.length;
		}
		
		tasks.subview = 'questions';
		tasks.show = function(subview) {
			tasks.subview = subview;
		}
		
		tasks.isShowing = function(subview) {
			return tasks.subview == subview;
		}
		
		tasks.showAllQuestions = function(newValue) {
			tasks.isShowingAllQuestions = newValue;
		}
		
		tasks.reset = function() {
			tasks.scoresheet = 0;
			tasks.currentQuestion = 0;
			tasks.showAllQuestions(false);
			
			var elPrefix1 = "#" + tasks.view + "_";
			for (var i = 0; i < tasks.questions.length; i++) {
				var elPrefix2 = elPrefix1 + i + "_";
				for (var j = 0; j < tasks.questions[i].choices.length; j++) {
					var elPrefix3 = elPrefix2 + j;
					$(elPrefix3).removeClass("btn-success");
					$(elPrefix3).removeClass("btn-danger");
					$(elPrefix3).addClass("btn-default");
				}
			}
		}
	});
})(pagesModule);