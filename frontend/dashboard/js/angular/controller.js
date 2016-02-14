var Controllers = angular.module('Controllers',[]);

Controllers.controller('MainCtrl', function($scope, $http) {

	$scope.my_user_id = "000";

	$scope.services;

	$scope.getServices = $http.get('https://localhost:5000/myServices/' + $scope.my_user_id, function(data) {    
        $scope.services = data; 
    });

	$scope.getServices.then(function(){
		console.log($scope.services);
	});


});

