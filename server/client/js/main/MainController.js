app.controller('MainController', ['$scope', 'Sem3', function($scope, Sem3) {
//data from the html gets stored here, then needs to get sent to the service
  $scope.input = "";
  
  $scope.showSpinner = false;

  $scope.data = {
    repeatSelect: null,
    availableOptions: [
      {id: '1', name: 'Search'},
      {id: '2', name: 'URL'},
      {id: '3', name: 'UPC/EAN'}
    ],
    selectedOption: {id: '1', name: 'Search'}
   };

  $scope.apiData = [];
  $scope.DoWork = function(){
    alert('Hello World! ' + $scope.MyText);  
  };

  $scope.findType = function () {

    $scope.showSpinner = true;
  	var index = $scope.data.repeatSelect;
  	// if ($scope.data.repeatSelect === "1") {
  	console.log('this is the type: ', $scope.data.selectedOption.name);
  	//take the search and the query and query the correct function
    var identifier;
  
    if ( $scope.data.selectedOption.name === "Search" ) {
      identifier = "search";
    } else if ( $scope.data.selectedOption.name === "URL" ) {
      identifier = "url";
    } else if ( $scope.data.selectedOption.name === "UPC/EAN" ) {
      identifier = "upc";
    }

		Sem3.apiQuery(identifier, $scope.input)
    .then(function (val) {
      $scope.showSpinner = false;
      console.log('back this is the data', val);
      $scope.apiData = val;
    })
    .catch(function (err) {
      $scope.showSpinner = false;
      console.log('err ', err);
    });
  };

}]);

