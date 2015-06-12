angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.saveLink(link, function(resp) {
      $location.path('/');
    });
  };
});
