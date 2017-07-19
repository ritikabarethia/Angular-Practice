
		angular.module("myApp", [])
		.controller("parentCtrl", function($scope){				//Parent
			$scope.helloWorld = function(){
				console.log("helloWorld of parentCtrl ");
			};	
		})

		.controller("childCtrl",function($scope){				//Child
			$scope.newFunction = function(){
				console.log("newFunction of childCtrl");
			};

			$scope.helloWorld = function(){
				console.log("new helloWorld of childCtrl");
			};
		})

		.controller("secondChildCtrl", function($scope){		//second child

		})

		.controller("siblingCtrl",function($scope){				//Sibling
			$scope.siblingVar = 1234;
		})



			
