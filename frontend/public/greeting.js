	angular.module('helloworld', [])
		.controller('Hello', function($scope, $http) {
		$http.get('http://localhost:3000').
        then(function(response) {
            $scope.greeting = response.data;
        });
	});