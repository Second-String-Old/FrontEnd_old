'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  //Sample Data
  $scope.players = [
    {fname:"Nick", lname:"Nazario", pos:"WR", team:"Chill End"}
    , {fname:"Gerb", lname:"Vande Hei", pos:"RB", team:"Warm End"}
    , {fname:"Colin", lname:"Williamson", pos:"QB", team:"Warm End"}
    , {fname:"Crisp", lname:"McCulloch", pos:"WR", team:"Warm End"}
  ];
  $scope.sortType = 'lname';
});