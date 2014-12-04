var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('TodoController',function($scope) {
  $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
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
myAppControllers.controller('TableController',function($scope) {
 
});

var mainCtrl = function($scope){
	$scope.btnState = 1,
	$scope.btnClick = function(state){
		$scope.btnState = state
	}

};

