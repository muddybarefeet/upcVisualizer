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
    
    console.log('value and identifier in factory', value, identifier);
    return $http(req)
    .then(function(apiReturn){
      console.log('in factory back: ', apiReturn);
      return apiReturn.data.data;
    });

  };

  return {
    "apiQuery": apiQuery
  };

}]);