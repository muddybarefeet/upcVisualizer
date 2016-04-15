app.factory('sem3', ['$http', function($http) { 
  

  var apiQuery = function (identifier, value) {
    var req = {
     method: 'POST',
     url: '/api',
     data: { 
      identifier: identifier,
      value: value
     }
    };
    //VALUE NOT WOKING CURRENTLY!!
    console.log('value', value);
    $http(req)
    .then(function(data){
      console.log('this is the data from the api: ',data);
    });

  };




  return {
    "apiQuery": apiQuery
  };

}]);