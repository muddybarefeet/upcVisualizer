var app = angular.module('UpcVisualizer', ['angularSpinner', 'ngRoute' ]);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'js/main/MainView.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});