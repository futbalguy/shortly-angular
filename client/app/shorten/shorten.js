angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.linkPath = "links";
  $scope.link = {};
  $scope.addLink = function() {
    Links.saveLink($scope.link, function(resp) {
      $location.path('#/');
    });
  };

  $scope.goToAllLinks = function() {
    $location.path('/links');
  };

});
