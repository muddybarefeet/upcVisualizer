app.controller('MainController', ['$scope', 'Sem3', function($scope, Sem3) {
//data from the html gets stored here, then needs to get sent to the service
  $scope.input = "";
  $scope.lastInput = "";
  $scope.showSpinner = false;
  $scope.errorMessage;
  $scope.page = 0;
  $scope.resultsCount = 0;

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
      {id: '3', name: 'UPC/EAN'},
      {id: '4', name: 'Site'},
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
      $scope.resultsCount = 0;
    }

    $scope.showSpinner = true;
  	var index = $scope.data.repeatSelect;

    console.log('this is the offset: ', $scope.offset);
  	//take the search and the query and query the correct function
    var identifier = $scope.data.selectedOption.name.toLowerCase();
  
    if ( $scope.data.selectedOption.name === "URL" ) {
      var isValidURL = validateURL($scope.input);
      if (!isValidURL) {
        $scope.showSpinner = false;
        return;
      }
    } else if ( $scope.data.selectedOption.name === "UPC/EAN" ) {
      identifier = "upc";
      var isValid = validateUPC($scope.input);
      if (!isValid) {
        $scope.showSpinner = false;
        return;
      }
    }

		Sem3.apiQuery(identifier, $scope.input, $scope.offset) //pass an offset everytime
    .then(function (val) {
      $scope.showSpinner = false;
      console.log('back this is the data', val, identifier);
      //ERROR HANDLING
      if (val.message) {
        $scope.errorMessage = val.message;
        removeError();
      } else {
        if (identifier === "search" || identifier === "site") {
          //show the pagination buttons
          $scope.showPaginators = true;
          $scope.resultsCount = val.count;
        }
        $scope.apiData = val.resultsUpdated;
      }
    })
    .catch(function (err) {
      $scope.showSpinner = false;
      console.log('err ', err);
      $scope.errorMessage = "This was a bad request";
      removeError();
    });
    $scope.lastInput = $scope.input;
  };

  var removeError = function () {
    setTimeout(function(){ 
      $scope.errorMessage = ""; 
      $scope.$apply();
    }, 2000);
  };

  var validateUPC = function (upc) {
    var isNum = /^\d+$/.test(upc);
    if (!isNum) {
      $scope.errorMessage = "This is not a valid UPC/EAN. A valid UPC/EAN does not contain letters.";
      removeError();
      return false;
    } else {
      return true;
    }
  };

  var validateURL = function (url) {
    var isUrl = /^http.*$/.test(url);
    if (!isUrl) {
      $scope.errorMessage = "This is not a valid URL. A valid UPC/EAN does not contain letters.";
      removeError();
      return false;
    } else {
      return true;
    }
  };

}]);

