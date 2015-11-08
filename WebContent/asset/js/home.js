'use strict';

var home = angular.module('fengs.home', ['ngRoute']);

home.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/index.html',
		controller: 'HomeCtrl'
	});
}]);

home.controller('HomeCtrl', function($scope, $http) {
	$scope.word = "Under Construction...<br>";
	$http.get('rest/ftocservice').then(
		function(result) {
			$scope.word += result.data.c;
			$scope.word += " to ";
			$scope.word += result.data.f;
		}
	);
});
