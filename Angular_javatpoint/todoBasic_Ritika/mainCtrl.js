angular.module("myApp",[])
	    .controller("mainCtrl",function($scope,dataService){
			    $scope.helloWorld = dataService.helloWorld;

			    // dataService.getTodos(function(response){
			    // 	//console.log(response.data);
			    // 	$scope.todos = response.data;
			    // });

			    $scope.todos= [
			    	{"name" :"one"},
			    	{"name" :"two"},
			    	{"name" :"three"},
			    	{"name" :"four"},
			    	{"name" :"five"},
			    	{"name" :"six"},
				];

				$scope.addTodo = function(){
					var todo = { name :" New Todo" };
					$scope.todos.unshift(todo);		//unshift() add at the begining of the array //push(todo); push at the end of array
				}
			    $scope.deleteTodos = function(todo, index){
			    	dataService.deleteTodos(todo);
			    	$scope.todos.splice(index,1);
			    } 

			    $scope.saveTodos = function(){
			    	var filteredTodos = $scope.todos.filter(function(todo){
			    		if(todo.edited){
			    			return todo;
			    		};
			    	});
			    	dataService.saveTodos(filteredTodos);
			    };  

	    })
	    //controller

angular.module("myApp")
		    .service('dataService', function($http){

		    		this.helloWorld= function(){
		    			console.log("this is tha data service's method");
		    		};

		    		this.getTodos = function(callback){
		    			$http.get('mock/todos.json')
		    			.then(callback)
		    		};

		    		this.deleteTodos = function(todo){
		    			console.log("The "+ todo.name +" todo has been deleted!");
		    			//logics
		    		};

		    		this.saveTodos = function(todo){
		    			console.log(todo.length +" todo has been saved!");
		    			//logics
		    		};
		    })