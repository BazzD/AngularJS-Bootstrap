var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myAppControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/todo', {
    templateUrl: 'partials/todo.html',
    controller: 'TodoController'
  }).
  when('/table', {
    templateUrl: 'partials/table.html',
    controller: 'TableController'
  }).
  otherwise({
    redirectTo: '/todo'
  });
}]);