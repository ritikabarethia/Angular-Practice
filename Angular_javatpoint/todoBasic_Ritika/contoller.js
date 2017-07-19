angular.module("myApp",[])
	    .controller("mainCtrl",function($scope){
	    	$scope.helloWorld = function () {
	    		console.log("hello there! This is the helloWorld function from the mainCtrl");
	    	};

	    $scope.todos =[
	    	{name:"one"},
	    	{name:"two"},
	    	{name:"three"},
	    	{name:"four"},
	    	{name:"five"},
	    	{name:"six"},
	    ]
	    
	    })