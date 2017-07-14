angular
  .module('app')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "Home";
    Friends.get().then(function(data) {
      $scope.friends = data;
    });

    $scope.save = function() {
      $http.post('http://localhost:3000/node', friends);
    };
  }]);