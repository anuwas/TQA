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
		.when('/sp-dependency-injection', {
			templateUrl: 'pages/spring/dependency-injection.html',
		})
		.when('/sp-spring-container', {
			templateUrl: 'pages/spring/spring-container.html',
		})
		.when('/sp-bean-factory', {
			templateUrl: 'pages/spring/bean-factory.html',
		})
		.when('/sp-application-context', {
			templateUrl: 'pages/spring/application-context.html',
		})
		.when('/sp-setter-injection', {
			templateUrl: 'pages/spring/setter-injection.html',
		})
		.when('/sp-constructor-injection', {
			templateUrl: 'pages/spring/constructor-injection.html',
		})
		.when('/sp-object-injection', {
			templateUrl: 'pages/spring/object-injection.html',
		})
		.when('/sp-inner-bean', {
			templateUrl: 'pages/spring/inner-bean.html',
		})		
		.when('/sp-bean-aliases', {
			templateUrl: 'pages/spring/bean-aliases.html',
		})
		.when('/sp-bean-idref', {
			templateUrl: 'pages/spring/bean-idref.html',
		})
		.when('/sp-bean-initiliaze-collection', {
			templateUrl: 'pages/spring/initializing-collection.html',
		})
		.when('/sp-bean-autowiring', {
			templateUrl: 'pages/spring/bean-autowiring.html',
		})
		.when('/sp-get-bean', {
			templateUrl: 'pages/spring/get-bean.html',
		})
		.when('/sp-bean-scope', {
			templateUrl: 'pages/spring/bean-scope.html',
		})
		.when('/sp-application-context-aware', {
			templateUrl: 'pages/spring/application-context-aware.html',
		})
		.when('/sp-bean-defination-inheritance', {
			templateUrl: 'pages/spring/bean-definitation-inheritance.html',
		})
		.when('/sp-bean-lifecycle-callbacks', {
			templateUrl: 'pages/spring/bean-lifecycle-callbacks.html',
		})
		.when('/sp-bean-post-processors', {
			templateUrl: 'pages/spring/bean-post-processors.html',
		})
		.when('/sp-bean-factory-post-processors', {
			templateUrl: 'pages/spring/bean-factory-post-processors.html',
		})
		.when('/sp-bean-coading-interface', {
			templateUrl: 'pages/spring/coding-to-interface.html',
		})
		.when('/sp-annotations', {
			templateUrl: 'pages/spring/annotations.html',
		})
		.when('/sp-annotation-required', {
			templateUrl: 'pages/spring/annotation-required.html',
		})
		.when('/sp-annotation-autowired', {
			templateUrl: 'pages/spring/annotation-autowired.html',
		})
		.when('/sp-annotation-qualifier', {
			templateUrl: 'pages/spring/annotation-qualifier.html',
		})
		.when('/sp-annotation-config', {
			templateUrl: 'pages/spring/annotation-config.html',
		})
		.when('/sp-annotation-resource', {
			templateUrl: 'pages/spring/annotation-resource.html',
		})
		.when('/sp-annotation-component', {
			templateUrl: 'pages/spring/annotation-component.html',
		})
		.when('/sp-stereotype-annotations', {
			templateUrl: 'pages/spring/stereotype-annotations.html',
		})
		.when('/sp-resource-properties', {
			templateUrl: 'pages/spring/reading-resource-propertiesfile.html',
		})
		.when('/sp-local', {
			templateUrl: 'pages/spring/local.html',
		})
		.when('/client', {
			templateUrl: 'views/client.html',
			controller: 'ClientController'	
		});
	
	

}]);