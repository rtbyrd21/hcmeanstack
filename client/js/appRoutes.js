angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
            controller:''
			
		})

		.when('/services', {
			templateUrl: 'views/services.html',
			controller: ''
		})
    
        .when('/services/:serviceid', {
			templateUrl: 'templates/servicedetail.html',
			controller: ''
		})
      
        .when('/admin', {
			templateUrl: 'templates/admin.html',
			controller: ''
		})

		
	$locationProvider.html5Mode(true);

}]);