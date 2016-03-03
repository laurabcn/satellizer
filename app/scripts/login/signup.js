
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
    .controller('SignUpController', SignUpController);
  SignUpController.$inject = ['$scope', '$auth', '$location'];
  function SignUpController($scope, $auth, $location){
    var vm = this;
    this.signup = function() {
      $auth.signup({
          email: vm.email,
          password: vm.password
        })
        .then(function() {
          // Si se ha registrado correctamente,
          // Podemos redirigirle a otra parte
          $location.path("/private");
        })
        .catch(function(response) {
          // Si ha habido errores, llegaremos a esta función
        });
    };

  }

