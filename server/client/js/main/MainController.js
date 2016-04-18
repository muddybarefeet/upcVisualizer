app.controller('MainController', ['$scope', 'Sem3', function($scope, Sem3) {
//data from the html gets stored here, then needs to get sent to the service
  $scope.input = "";

  $scope.data = {
    repeatSelect: null,
    availableOptions: [
      {id: '0', name: 'Search'},
      {id: '1', name: 'Site'},
      {id: '2', name: 'UPC/EAN'}
    ],
   };

  $scope.apiData;

  $scope.findType = function () {

  	var index = $scope.data.repeatSelect;
  	// if ($scope.data.repeatSelect === "1") {
  	console.log('this is the type: ', $scope.data.availableOptions[index].name);
  	//take the search and the query and query the correct function
    console.log('input: ',$scope.input);
    var identifier;
  
    if ( $scope.data.availableOptions[index].name === "Search" ) {
      identifier = "search";
    } else if ( $scope.data.availableOptions[index].name === "Site" ) {
      identifier = "site";
    } else if ( $scope.data.availableOptions[index].name === "UPC/EAN" ) {
      identifier = "upc";
    }
		Sem3.apiQuery(identifier, $scope.input)
    .then(function (val) {
      console.log('back this is the data', val);
      $scope.apiData = val;
    })
    .catch(function (err) {
      console.log('err ', err);
    });

  };

}]);
