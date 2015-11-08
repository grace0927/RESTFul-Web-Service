'use strict';

var faith = angular.module('fengs.faith', ['ngRoute']);

faith.config('$routeProvider', function($routeProvider) {
	$routeProvider.when('/faith', {
		templateUrl: 'faith/index.html'
	});
});