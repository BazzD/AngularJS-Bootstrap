var myAppControllers = angular.module('myAppControllers', []);
var mainCtrl = function($scope){
	$scope.btnState=1;
	$scope.btnClick = function(state){
		$scope.btnState = state
	}

};
myAppControllers.controller('TodoController',function($scope) {
  $scope.btnState=1;
  $scope.todos = [
        {text:'Sinterklaasgedichtje schrijven', done:false},
        {text:'Schoen zetten', done:false},
        
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;
        })
    };

    $scope.addTodo = function () {
        if($scope.formTodoText.trim().length){
            $scope.todos.push({text:$scope.formTodoText, done:false});
            $scope.formTodoText = '';
        }
    };
});
myAppControllers.controller('TableController',function($scope,$http) {
	$scope.btnState=2;
	$http.get('countries.json').success(function(data) {
		$scope.countries = data;
		console.log($scope.countries);
	});
});
 




