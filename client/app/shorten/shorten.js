angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.linkPath = "links";
  $scope.link = {};
  $scope.data.links = [];
  $scope.addLink = function() {
    Links.saveLink($scope.link, function(resp) {
      // $location.path('#/');
      $scope.data.links.push($scope.link);
    });
  };

  $scope.signOut = function(){
    Auth.signout();
  };

});
