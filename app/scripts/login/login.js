(function() {
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
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$auth', '$location', '$log'];
  function LoginCtrl($scope, $auth, $location, $log) {
    var vm = this;


    vm.login = function () {
      $log.log(vm);
      $auth.login({
          email: vm.name,
          password: vm.password
        })
        .then(function () {
          $location.path("http://localhost:9000/#/about");
          $log.log("ENTROOOO");
        })
        .catch(function(response){
          $log.log(response);
        });
    };
    vm.authenticate = function (provider) {
      $auth.setStorageType('sessionStorage');
      switch (provider) {
        case 'google':
          $auth.authenticate('google')
            .then(function (response) {

            })
            .catch(function (response) {

            });
          break;
        case 'twitter':
          $auth.authenticate('twitter')
            .then(function (response) {

            })
            .catch(function (response) {

            });
          break;

        case 'facebook':
          $auth.authenticate('facebook')
            .then(function (response) {
              $log.log("THENNNN");
            })
            .catch(function (response) {
              $log.log("ERROR");
            });
          break;

      }


    };

  }
})();

