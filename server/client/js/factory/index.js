app.factory('Sem3', ['$http', function($http) { 

  var apiQuery = function (identifier, value, offset) {
    var req = {
     method: 'POST',
     url: '/api',
     data: { 
      identifier: identifier,
      value: value,
      offset: offset
     }
    };
    
    console.log('value and identifier in factory', value, identifier);
    return $http(req)
    .then(function(apiReturn){
      console.log('in factory back: ', apiReturn);
      if (apiReturn.status === 200 && apiReturn.data.data.length > 0 ) {
        return apiReturn.data.data;
      } else if ( apiReturn.data.data.length === 0 ) {
        return {
          message: "No match found:   Input: '"+ value + "' Search Type: '"+ identifier + "'"
        }
      } else {
        return {
          message: apiReturn.data.message
        }
      }
    });

  };

  return {
    "apiQuery": apiQuery
  };

}]);