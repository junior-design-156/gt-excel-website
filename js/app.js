//Defining the module
var gtexcelApp = angular.module('gtexcelApp', ['ngRoute']);


gtexcelApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
		//About
		.when('/about', {
			templateUrl: 'about.html'
		})
		//Home
		.otherwise({
			templateUrl: 'home.html',
			controller: 'GTExcelCtrl'
		});
}]);

gtexcelApp.controller('GTExcelCtrl',['$scope',function($scope,$route){
	$scope.name = "home";
}]);





