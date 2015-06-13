angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.shortenPath = "shorten";

  $scope.getLinks = function() {
    Links.fetchLinks(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();

  $scope.goToLink = function(index) {
    Links.goToLink($scope.data.links[index],function(resp) {
      console.log(resp);
    });
  };

  $scope.signOut = function(){
    Auth.signout();
  }

});
