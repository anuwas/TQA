angular.module('QbanksCtrl',[]).controller('QbankController',function($scope,$http,$location,$routeParams){
	$scope.oneAtATime = true;
  $scope.groups = [
    {
      question: 'Dynamic Group Header - 1',
      answer: 'Dynamic Group Body - 1'
    },
    {
      question: 'Dynamic Group Header - 2',
      answer: 'Dynamic Group Body - 2'
    }
  ];

  
  $http.get('resources/js/QBANKQ.json').
  then(function onSuccess(response) {
    $scope.groups=response.data[$routeParams.param];
  	/*switch($location.url()){
  		case '/qbank-multithreading':
  		$scope.groups=response.data.multithreading;
  		break;
  		case '/qbank-datatype':
  		$scope.groups=response.data.datatypesandbasic;
  		break;
  	}*/
     
     //console.log(response.data.multithreading);
  }).
  catch(function onError(response) {
   console.log(response);
  });

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
})