angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'pages/dashboard.html',
		})
		.when('/java7switchonstring', {
			templateUrl: 'pages/java7/switch_on_string.html',
		})
		.when('/java7bineryleteralwithprefix', {
			templateUrl: 'pages/java7//binary_leteral_with_prefix.html',
		})
		.when('/java7underscoreonnumericleteral', {
			templateUrl: 'pages/java7/underscore_on_numeric_leteral.html',
		})
		.when('/java7catchingmultipleexception', {
			templateUrl: 'pages/java7/catching_multiple_exception.html',
		})
		.when('/java7trywithresourcestatement', {
			templateUrl: 'pages/java7/try_with_resource_statement.html',
		})
		.when('/java7typeinterfaceforgenericcreation', {
			templateUrl: 'pages/java7/type_interface_for_generci_type_creation.html',
		})
		.when('/java8foreachmethoditerableinterface', {
			templateUrl: 'pages/java8/for_each_method_iterable_interface.html',
		})
		.when('/java8defaultandstaticmethodinterface', {
			templateUrl: 'pages/java8/default_and_static_method_in_interface.html',
		})
		.when('/java8functionalinterfaceandlambdaexpression', {
			templateUrl: 'pages/java8/functioal_interface_and_lambda_expression.html',
		})
		.when('/recent-customers', {
			templateUrl: 'views/recentcustomers.html',
			controller: 'CustomerController'	
		})
		.when('/top-order-customers', {
			templateUrl: 'views/topordercustomers.html',
			controller: 'CustomerController'	
		})
		.when('/customer-feedbacks', {
			templateUrl: 'views/customerfeedbacks.html',
			controller: 'CustomerController'	
		})
		.when('/advertisement', {
			templateUrl: 'views/advertisement.html',
			controller: 'AdvertisementController'	
		})
		.when('/createadvertisement', {
			templateUrl: 'views/createadvertisement.html',
			controller: 'AdvertisementController'	
		})
		.when('/editadvertisement', {
			templateUrl: 'views/editadvertisement.html',
			controller: 'AdvertisementController'	
		})
		.when('/bookings', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'	
		})
		.when('/onlineorder', {
			templateUrl: 'views/onlineorder.html',
			controller: 'OnlineOrderController'	
		})
		
		.when('/product', {
			templateUrl: 'views/product.html',
			controller: 'ProductController'	
		})
		.when('/customer', {
			templateUrl: 'views/customer.html',
			controller: 'CustomerController'	
		})
		.when('/client', {
			templateUrl: 'views/client.html',
			controller: 'ClientController'	
		});
	
	

}]);