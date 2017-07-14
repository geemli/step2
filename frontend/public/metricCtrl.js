angular
  .module('app')
  .controller('metricCtrl', ['$scope', '$state','Metric', function($scope, $state, Metric ) {
    $scope.title = "Metric";
	    Metric.get($state.params.metric).then(function(data) {
		
      $scope.items = data;
	  console.log($scope.items)
    });
  }]);