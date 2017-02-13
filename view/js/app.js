//Defining the module
var gtexcelApp = angular.module('gtexcelApp', [ 'ngRoute' ]);

gtexcelApp.config(['$routeProvider', '$locationProvider', '$controllerProvider', function($routeProvider,$locationProvider,$controllerProvider){
	$locationProvider.hashPrefix("");
	$controllerProvider.allowGlobals();
	$(".nav a").on("click", function(){
   	$(".nav").find(".active").removeClass("active");
   	$(this).parent().addClass("active");
});
	$routeProvider
		.when('/about', {
			templateUrl: 'about.html'
		})
		.when('/jobsearch', {
			templateUrl: 'jobsearch.html'
		})
		.when('/business', {
			templateUrl: 'business.html'
		})
		.when('/local', {
			templateUrl: 'local.html'
		})
		.when('/benefits', {
			templateUrl: 'benefits.html'
		})
		.when('/fed_hire', {
			templateUrl: 'fed_hire.html'
		})
		.otherwise({
			templateUrl: 'home.html'
		});
}]);

//Define the controller for the module
gtexcelApp.controller('GTExcelController', function($scope){
	$scope.name = "Vince";
});

gtexcelApp.controller('JobSearchController', function JobSearchController($scope){
	$scope.option = 0;
	$scope.toggle = function(val) {
		$scope.option = val;
	};
});

gtexcelApp.controller('BenefitsCounselorController', function BenefitsCounselorController($scope){
	$scope.option = 0;
	$scope.toggle = function(val) {
		$scope.option = val;
	};
});

gtexcelApp.controller('BenefitsInfoController', function BenefitsInfoController($scope){
	$scope.option = 1;
	$scope.toggle = function(val) {
		$scope.option = val;
	};
});