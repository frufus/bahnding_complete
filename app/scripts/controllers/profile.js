'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('ProfileCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.animationClass = 'bottom';
        $scope.avatar = false;

        $scope.clickedAva = function() {
            $scope.avatarSize = $scope.avatar ? 'big' : '';
            $scope.avatar = !$scope.avatar;
        };
  });
