app.controller('MainController', ['$scope', 'sem3', function($scope, sem3) {
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

  $scope.findType = function () {
  	var index = $scope.data.repeatSelect;
  	// if ($scope.data.repeatSelect === "1") {
  	console.log('this is the type: ', $scope.data.availableOptions[index].name);
  	//take the search and the query and query the correct function
  	if ( $scope.data.availableOptions[index].name === "Search" ) {
  		sem3.apiQuery("search", $scope.input);
  	} else if ( $scope.data.availableOptions[index].name === "Site" ) {
  		sem3.apiQuery("site", $scope.input);
  	} else if ( $scope.data.availableOptions[index].name === "UPC/EAN" ) {
  		sem3.apiQuery("upc", $scope.input);
  	}

  };

}]);
