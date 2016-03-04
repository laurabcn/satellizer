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
      .when('/signup', {
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/logout', {
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .otherwise({
        redirectTo: '/'
      });
    $authProvider.facebook({
      clientId: '223985831285204',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      popupOptions: { width: 580, height: 400 }
    });

    $authProvider.live({
      clientId: '000000004C18335A'
    });

    // No additional setup required for Twitter

    // Twitter
    $authProvider.twitter({
      authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
      redirectUri: window.location.origin,
      type: '1.0',
      popupOptions: { width: 495, height: 645 }
    });

    $authProvider.oauth2({
      name: 'Login',
      url: '/#/login',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

  });
