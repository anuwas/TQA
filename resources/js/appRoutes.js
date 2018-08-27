angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'pages/dashboard.html',
		})
		.when('/java7switchonstring', {
			templateUrl: 'pages/java7/switch_on_string.html',
		})
		.when('/java7bineryleteralwithprefix', {
			templateUrl: 'pages/java7/binary_leteral_with_prefix.html',
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
		.when('/sp-bean-autowiring-by-name', {
			templateUrl: 'pages/spring/bean-autowiring-by-name.html',
		})
		.when('/sp-bean-autowiring-bytype', {
			templateUrl: 'pages/spring/bean-autowiring-by-type.html',
		})
		.when('/sp-bean-autowiring-by-constructor', {
			templateUrl: 'pages/spring/bean-autowiring-by-constructor.html',
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
		.when('/sp-abstract-application-context', {
			templateUrl: 'pages/spring/abstract-application-context.html',
		})
		.when('/sp-callback-use-globally', {
			templateUrl: 'pages/spring/callback-use-globally.html',
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
		.when('/sp-jsr250-annotations', {
			templateUrl: 'pages/spring/jsr-250-annotation.html',
		})
		.when('/sp-annotation-resource', {
			templateUrl: 'pages/spring/annotation-resource.html',
		})
		.when('/sp-init-and-destroy', {
			templateUrl: 'pages/spring/init-and-destroy.html',
		})
		.when('/sp-annotation-component', {
			templateUrl: 'pages/spring/annotation-component.html',
		})
		.when('/sp-stereotype-annotations', {
			templateUrl: 'pages/spring/stereotype-annotations.html',
		})
		.when('/sp-annotation-service', {
			templateUrl: 'pages/spring/annotation-service.html',
		})
		.when('/sp-annotation-repository', {
			templateUrl: 'pages/spring/annotation-repository.html',
		})
		.when('/sp-annotation-controller', {
			templateUrl: 'pages/spring/annotation-controller.html',
		})
		.when('/sp-resource-properties', {
			templateUrl: 'pages/spring/reading-resource-propertiesfile.html',
		})
		.when('/sp-local', {
			templateUrl: 'pages/spring/local.html',
		})
		.when('/collection-collection-framework', {
			templateUrl: 'pages/collection/collection-framework.html',
		})
		.when('/collection-benefits-of-collections', {
			templateUrl: 'pages/collection/benifits-of-collection.html',
		})
		.when('/collection-interfaces', {
			templateUrl: 'pages/collection/collection-interfaces.html',
		})
		.when('/collection-interface', {
			templateUrl: 'pages/collection/collection-interface.html',
		})
		.when('/collection-iterator-interface', {
			templateUrl: 'pages/collection/iterator-interface.html',
		})
		.when('/collection-set-interface', {
			templateUrl: 'pages/collection/set-interface.html',
		})
		.when('/collection-list-interface', {
			templateUrl: 'pages/collection/list-interface.html',
		})
		.when('/collection-queue-interface', {
			templateUrl: 'pages/collection/queue-interface.html',
		})
		.when('/collection-dequeue-interface', {
			templateUrl: 'pages/collection/dequeue-interface.html',
		})
		.when('/collection-map-interface', {
			templateUrl: 'pages/collection/map-interface.html',
		})
		.when('/collection-listiterator-interface', {
			templateUrl: 'pages/collection/map-interface.html',
		})
		.when('/collection-sortedset-interface', {
			templateUrl: 'pages/collection/sortedset-interface.html',
		})
		.when('/collection-sortedmap-interface', {
			templateUrl: 'pages/collection/sorted-map-interface.html',
		})
		.when('/collection-classes', {
			templateUrl: 'pages/collection/collection-classes.html',
		})
		.when('/collection-hashset-class', {
			templateUrl: 'pages/collection/hashset-class.html',
		})
		.when('/collection-treeset-class', {
			templateUrl: 'pages/collection/treeset-class.html',
		})
		.when('/collection-arraylist-class', {
			templateUrl: 'pages/collection/arraylist-class.html',
		})
		.when('/collection-linkedlist-class', {
			templateUrl: 'pages/collection/linkedlist-class.html',
		})
		.when('/collection-hash-map-class', {
			templateUrl: 'pages/collection/hashmap-class.html',
		})
		.when('/collection-tree-map-class', {
			templateUrl: 'pages/collection/treemap-class.html',
		})
		.when('/collection-proprity-queue-class', {
			templateUrl: 'pages/collection/priority-queue-class.html',
		})
		.when('/collection-collection-class', {
			templateUrl: 'pages/collection/collection-class.html',
		})
		.when('/collection-synchronized-wrapper', {
			templateUrl: 'pages/collection/synchronized-wrapper.html',
		})
		.when('/collection-unmodifiable-wrapper', {
			templateUrl: 'pages/collection/unmodifiable-wrapper.html',
		})
		.when('/collection-thread-safe', {
			templateUrl: 'pages/collection/thread-safe-collection.html',
		})
		.when('/collection-api-algorithm', {
			templateUrl: 'pages/collection/collection-api-alogrithm.html',
		})
		.when('/collection-api-algorithm-sorting', {
			templateUrl: 'pages/collection/collection-api-alogrithm-sorting.html',
		})
		.when('/collection-api-algorithm-suffling', {
			templateUrl: 'pages/collection/collection-api-alogrithm-suffling.html',
		})
		.when('/collection-api-algorithm-searching', {
			templateUrl: 'pages/collection/collection-api-alogrithm-searching.html',
		})
		.when('/collection-api-algorithm-composition', {
			templateUrl: 'pages/collection/collection-api-alogrithm-composition.html',
		})
		.when('/collection-min-and-max-values', {
			templateUrl: 'pages/collection/min-and-max-values.html',
		})
		.when('/collection-java8-collection-features', {
			templateUrl: 'pages/collection/java8-collection-features.html',
		})
		.when('/collection-classes-nutshell', {
			templateUrl: 'pages/collection/collection-classes-nutshell.html',
		})
		.when('/collection-faq-hashmap-work-internally', {
			templateUrl: 'pages/collection/how_hashmap_work_internally.html',
		})
		.when('/collection-faq-difference-hashmap-hashtable', {
			templateUrl: 'pages/collection/difference_hashmap_hashtable.html',
		})
		.when('/collection-faq-difference-hashset-hashmap', {
			templateUrl: 'pages/collection/difference_hashset_hashmap.html',
		})
		.when('/collection-faq-concurrenthashmap-collections-synchronizedmap', {
			templateUrl: 'pages/collection/difference_concurrenthashmap_collections_synchronize.html',
		})
		.when('/collection-faq-hashtable-concurrenthashmap', {
			templateUrl: 'pages/collection/hashtable_vs_concurrent_hashmap.html',
		})
		.when('/collection-faq-arraylist-vs-linkedlist', {
			templateUrl: 'pages/collection/arraylist_vs_linkedlist.html',
		})
		.when('/collection-faq-difference-arraylist-vector', {
			templateUrl: 'pages/collection/difference_arraylist_vector.html',
		})
		.when('/collection-faq-difference-hashset-hashtree', {
			templateUrl: 'pages/collection/difference_hashset_hashtree.html',
		})
		.when('/collection-faq-fail-first-vs-fail-safe', {
			templateUrl: 'pages/collection/fail_first_vs_fail_safe.html',
		})
		.when('/collection-faq-comprable-and-comparator-interface', {
			templateUrl: 'pages/collection/comparable_and_conparator_interface.html',
		})
		.when('/misliqa-memory-management', {
			templateUrl: 'pages/mislinious/memory_management.html',
		})
		.when('/misliqa-encapsulation', {
			templateUrl: 'pages/mislinious/encapsulation.html',
		})
		.when('/misliqa-abstraction', {
			templateUrl: 'pages/mislinious/abstraction.html',
		})
		.when('/misliqa-has-a-vs-is-a-relationship', {
			templateUrl: 'pages/mislinious/has-a-vs-is-a.html',
		})
		.when('/misliqa-shallow-clone-vs-deep-clone', {
			templateUrl: 'pages/mislinious/shallow_clone_vs_deep_clone.html',
		})
		.when('/qbank/:param', {
			templateUrl: 'pages/qbank/index.html',
			controller:'QbankController',
		})
		.when('/client', {
			templateUrl: 'views/client.html',
			controller: 'ClientController'	
		});
}]);