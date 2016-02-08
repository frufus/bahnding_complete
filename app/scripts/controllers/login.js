'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('LoginCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.loginForm = {};

        $scope.doLogin = function() {
            console.log($scope.loginForm);
            $scope.loginForm.$setSubmitted();
            if($scope.loginForm.$valid) {
                $location.url("/menu");
            }
        };

        $scope.register = function() {
            $location.url('/register1')
        };
  });
