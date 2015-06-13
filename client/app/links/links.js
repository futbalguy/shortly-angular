angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  // Your code here
  $scope.data = {};
  $scope.shortenPath = "shorten";
  $scope.getLinks = function() {
    Links.fetchLinks(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();

  $scope.goToShorten = function() {
    $location.path('/shorten');
  };

  $scope.goToLink = function(index) {
    Links.goToLink($scope.data.links[index],function(data) {
      console.log(data)
    });
  };

});
