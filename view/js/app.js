//Defining the module
var gtexcelApp = angular.module('gtexcelApp', [ 'ngRoute' ]);

gtexcelApp.config(['$routeProvider', '$locationProvider', '$controllerProvider', function($routeProvider,$locationProvider,$controllerProvider){
	$locationProvider.hashPrefix("");
	$controllerProvider.allowGlobals();
	//For navigation bar shading
	$(".nav a").on("click", function(){
   	$(".nav").find(".active").removeClass("active");
   	$(this).parent().addClass("active");
   	//For accordian toggling
   	$('#accordion').find('.t-title, .t-toggle').attr('data-toggle', 'collapse');
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
	$scope.homeButton = function(){
		$(".nav").find(".active").removeClass("active");
	};
});

gtexcelApp.controller('JobSearchController', function JobSearchController($scope){
	$scope.option = 0;
	$scope.toggle = function(val) {
		$scope.option = val;
	};

	$scope.businessButton = function(){
	   	$(".nav").find(".active").removeClass("active");
	   	$(".nav").find(".busi").addClass("active");
	};

	$scope.localButton = function(){
	   	$(".nav").find(".active").removeClass("active");
	   	$(".nav").find(".local").addClass("active");
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
