angular.module('shortly.shorten', [])
.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.linkPath = "links";
  $scope.link = {};
  $scope.data = {};
  $scope.data.links = [];
  $scope.addLink = function() {
    Links.saveLink($scope.link, function(resp) {
      // $location.path('#/');
      $scope.link.url = "";
      $scope.data.links.push(resp.data);
    });
  };

  $scope.signOut = function(){
    Auth.signout();
  };


  $scope.isValidUrl = function(url) {
    if ( !url ) {
      return false;
    }
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    return url.match(rValidUrl);
  }
});
