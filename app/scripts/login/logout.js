
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
    .controller("LogoutController", LogoutController);

  LogoutController.$inject = ['$scope', '$auth', '$location'];

  function LogoutController($scope, $auth, $location){

    $auth.logout().then(function(){
      $location.path("/");
    });
  }

