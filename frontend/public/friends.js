angular
  .module('app')
  .factory('Friends', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('http://localhost:3000/metric').then(function(response) {
          return response.data;
        });
      }
    };
  }])