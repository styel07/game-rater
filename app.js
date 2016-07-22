var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {

$http({
    method : "GET",
    url : "http://www.cheapshark.com/api/1.0/deals"
    }).then(function mySucces(response) {
      $scope.dataRes = response.data;

      $scope.cat90 = [];
      $scope.cat80 = [];
      $scope.cat70 = [];
      $scope.cat60 = [];
      $scope.cat50 = [];
      $scope.cat40 = [];
      $scope.cat30 = [];
      $scope.cat20 = [];
      $scope.cat10 = [];
      $scope.cat0 = [];

      angular.forEach($scope.dataRes, function(item){
        var itemScore = item.metacriticScore;

        if (itemScore >= 90) {
          $scope.cat90.push(item);
        } else if (itemScore >= 80 && itemScore <= 89) {
          $scope.cat80.push(item);
        } else if (itemScore >= 70 && itemScore <= 79) {
          $scope.cat70.push(item);
        } else if (itemScore >= 60 && itemScore <= 69) {
          $scope.cat60.push(item);
        } else if (itemScore >= 50 && itemScore <= 59) {
          $scope.cat50.push(item);
        } else if (itemScore >= 40 && itemScore <= 49) {
          $scope.cat40.push(item);
        } else if (itemScore >= 30 && itemScore <= 39) {
          $scope.cat30.push(item);
        } else if (itemScore >= 20 && itemScore <= 29) {
          $scope.cat20.push(item);
        } else if (itemScore >= 10 && itemScore <= 19) {
          $scope.cat10.push(item);
        } else {
          $scope.cat0.push(item);
        }

      });

      }, function myError(response) {
          $scope.dataRes = response.statusText;
      });

});
