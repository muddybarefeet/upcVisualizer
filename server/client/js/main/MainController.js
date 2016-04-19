app.controller('MainController', ['$scope', 'Sem3', function($scope, Sem3) {
//data from the html gets stored here, then needs to get sent to the service
  $scope.input = "";
  $scope.lastInput = "";
  $scope.showSpinner = false;
  $scope.errorMessage;
  $scope.page = 0;

  $scope.offset = 800;
  $scope.showPaginators = false;

  $scope.prevClick = function () {
    //if the offset is 0 then cant do, do not show
    $scope.offset -= 10;
    $scope.page -= 1;
    //trigger the api call
    $scope.findType();
  };
  $scope.nextClick = function () {
    //increment the offset and then trigger the findType function again
    $scope.offset += 10;
    $scope.page += 1;
    //invoke the get api data function
    $scope.findType();
  };

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

  $scope.findType = function () {
    //check if the current select is the same as the old select and the vals are same
    //if not the reset
    if ( $scope.lastInput !== $scope.input ) {
      $scope.offset = 0;
      $scope.page = 0;
      $scope.showPaginators = false;
    }

    $scope.showSpinner = true;
  	var index = $scope.data.repeatSelect;

    console.log('this is the offset: ', $scope.offset);
  	//take the search and the query and query the correct function
    var identifier;
  
    if ( $scope.data.selectedOption.name === "Search" ) {
      identifier = "search";
    } else if ( $scope.data.selectedOption.name === "URL" ) {
      identifier = "url";
    } else if ( $scope.data.selectedOption.name === "UPC/EAN" ) {
      identifier = "upc";
    }

		Sem3.apiQuery(identifier, $scope.input, $scope.offset) //pass an offset everytime
    .then(function (val) {
      $scope.showSpinner = false;
      console.log('back this is the data', val, identifier);
      //ERROR HANDLING
      if (val.message) {
        $scope.errorMessage = val.message;
        setTimeout(function(){ $scope.errorMessage = ""; }, 1000);
      } else {
        if (identifier === "search") {
          //show the pagination buttons
          $scope.showPaginators = true;
        }
        $scope.apiData = val;
      }
    })
    .catch(function (err) {
      $scope.showSpinner = false;
      console.log('err ', err);
      $scope.errorMessage = err;
    });
    $scope.lastInput = $scope.input;
  };

}]);

