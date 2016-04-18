app.factory('Sem3', ['$http', function($http) { 

  var apiQuery = function (identifier, value) {
    var req = {
     method: 'POST',
     url: '/api',
     data: { 
      identifier: identifier,
      value: value
     }
    };
    
    console.log('value', value);
    return $http(req)
    .then(function(apiReturn){
      return apiReturn.data.results;
    });

  };

  return {
    "apiQuery": apiQuery
  };

}]);