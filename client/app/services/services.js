angular.module('shortly.services', [])
.factory('Links', function ($http) {
  var fetchLinks = function(callback) {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(resp){
      callback(resp.data);
    });
  };

  var saveLink = function(link, callback) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function(resp) {
      callback(resp);
    });
  };

  var goToLink = function(link, callback) {
    return $http({
      method: 'GET',
      url: '/api/links/' + link.code
    })
    .then(function(resp) {
      callback(resp);
    });
  };

  return {
    fetchLinks: fetchLinks,
    saveLink: saveLink,
    goToLink: goToLink
  };
  // Your code here
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
