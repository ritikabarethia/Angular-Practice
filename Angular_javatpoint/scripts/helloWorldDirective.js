
angular.module("myApp")
	   .directive("helloWorld", function () {
			return {
				template : "this is directive",
				restrict : "E"
			};
		});