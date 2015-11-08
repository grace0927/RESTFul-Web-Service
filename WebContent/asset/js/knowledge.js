'use strict';

var knowledge = angular.module('fengs.knowledge', ['ngRoute']);

knowledge.config('$routeProvider', function($routeProvider) {
	$routeProvider.when('/knowledge', {
		templateUrl: 'knowledge/index.html'
	});
});