"use strict";

var family = angular.module('fengs.family', ['ngRoute']);

family.config('$routeProvider', function($routeProvider) {
	$routeProvider.when('/family', {
		templateUrl: "family/index.html"
	});
});