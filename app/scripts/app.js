'use strict';

/**
 * @ngdoc overview
 * @name satellizerApp
 * @description
 * # satellizerApp
 *
 * Main module of the application.
 */
angular
  .module('satellizerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'scripts/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'scripts/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/logout', {
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when("/signup", {
        templateUrl: "scripts/login/signup.html",
        controller: "SignUpController",
        controllerAs: "signup"
      })
      .otherwise({
        redirectTo: '/'
      });
<<<<<<< HEAD
  })
  .config(function($authProvider) {
    $authProvider.loginUrl = "http://localhost:9000/#/login";
    $authProvider.signupUrl = "http://localhost:9000/#/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "myApp";

=======
>>>>>>> d6d8abd949b435db66caeac9bed2ce02a36d62f0
    $authProvider.facebook({
      clientId: '846834785440087',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      url: 'http://localhost:9000/#/login',
      scope: ['email'],
      display: 'popup',
      type: '2.0',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      popupOptions: { width: 580, height: 400 }
    });

<<<<<<< HEAD
    $authProvider.google({
      clientId: 'Google Client ID'
    });

=======
>>>>>>> d6d8abd949b435db66caeac9bed2ce02a36d62f0
    $authProvider.live({
      clientId: '000000004C18335A'
    });

<<<<<<< HEAD
=======
    // No additional setup required for Twitter

>>>>>>> d6d8abd949b435db66caeac9bed2ce02a36d62f0
    // Twitter
    $authProvider.twitter({
      authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
      redirectUri: window.location.origin,
      type: '1.0',
      popupOptions: { width: 495, height: 645 }
    });
  })
  /*.config(['$httpProvider', 'satellizer.config', function($httpProvider, config) {
    $httpProvider.interceptors.push(['$q', function($q) {
      var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
      return {
        request: function(httpConfig) {
          var token = localStorage.getItem(tokenName);
          if (token && config.httpInterceptor) {
            token = config.authHeader === 'Authorization' ? 'Bearer ' + token : token;
            httpConfig.headers[config.authHeader] = token;
          }
          return httpConfig;
        },
        responseError: function(response) {
          return $q.reject(response);
        }
      };
    }]);
  }])*/;
