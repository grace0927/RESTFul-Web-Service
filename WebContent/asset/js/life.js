'use strict';

var life = angular.module('fengs.life', ['ngRoute']);

life.config('$routeProvider', function($routeProvider) {
	$routeProvider.when('/life', {
		templateUrl: 'life/index.html'
	});
});