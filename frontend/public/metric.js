angular
  .module('app')
  .factory('Metric', ['$http', function($http) {
    return {
      get: function(param) {
        return $http.get('http://localhost:3000/metric/'+param).then(function(response) {
          return response.data;
        });
      }
    };
  }])