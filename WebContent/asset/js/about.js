'use strict';

var aboutMe = angular.module('fengs.about', ['ngRoute']);

aboutMe.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'about/index.html',
		controller: 'AboutCtrl'
	});
}]);

aboutMe.controller('AboutCtrl', function($scope) {
	$scope.name = "Jianyu Feng";
});

aboutMe.controller('ContentCtrl', function($scope) {
	$scope.blocks = [
		{
			title: "SUMMARY",
			type: 'param',
			content: "Computer Programmer with technical expertise in programming tools (JAVA, C++), " +
					"script tools (PHP, JavaScript, Python) and database systems (MySQL). " +
					"Deep understanding of MVC Framework and Object-Oriented Programming. Knowledge of RESTful Web Service. " +
					"Deep desire for new technologies. Very fast learner and good team player."
		},
		{
			title: "TECHNICAL SKILLS",
			type: 'list',
			lists: ["JAVA, C, C++","JavaScript, PHP, AJAX, JQurey","MySQL, NoSQL","Linux/UNIX system, Bash Script"]
		},
		{
			title: "PROFESSIONAL EXPERIENCE",
			type: 'param',
			content: "Develop, trouble shoot, test, maintain, and manage the company’s core VoIP system " +
					"based on Asterisk, OpenSIPs, MySQL and self-developed software in Java. Develop and " +
					"Maintain the company’s core accounting system in CakePHP MVC Framework. Develop " +
					"and maintain the company’s core database system in MySQL. Develop and maintain Web " +
					"applications of various company products in Yii2 MVC Framework. Develop and " +
					"maintain API server based on RESTful Web Service in JAVA. Perform technical support to " +
					"customers using the company’s service."
		},
		{
			title: "EDUCATION",
			type: 'list',
			lists: [
			        "M.S., Applied Mathematics (GPA 3.6), SUNY at Stony Brook, NY",
			        "B.S., Math and Applied Math (GPA 3.4), Beijing University of Posts and Telecom., P.R. China"
			]
		}
	];
});