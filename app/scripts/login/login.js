
  'use strict';


  /**
   * @ngdoc function
   * @name satellizerApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the satellizerApp
   */
  angular
    .module('satellizerApp')
    .controller('LoginCtrl',  function ($scope, $auth) {
    var vm = this;
    /*var user = {
      email: vm.email,
      password: vm.password
    };*/

    vm.authenticate = function(provider) {
      $auth.setStorageType('sessionStorage');
      console.log($auth);
      $auth.authenticate(provider);
      $auth.login();
    };

    $auth.authenticate('google')
      .then(function(response) {
         console.log(response);
        console.log('google');
      })
      .catch(function(response) {
        console.log(response);
      });

    $auth.authenticate('twitter')
      .then(function(response) {
        console.log(response);
        console.log('twitter');
      })
      .catch(function(response) {
        console.log(response);
      });

    $auth.authenticate('facebook')
      .then(function(response) {
        console.log('facebook');
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });

  });

