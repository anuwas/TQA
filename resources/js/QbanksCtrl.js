angular.module('QbanksCtrl',[]).controller('QbankController',function($scope,$http){
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
     $scope.groups=response.data.multithreading;
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