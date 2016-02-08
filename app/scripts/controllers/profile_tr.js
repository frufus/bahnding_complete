'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:ProfileTrCtrl
 * @description
 * # ProfileTrCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('ProfileTrCtrl', function ($scope, $location, $timeout, audio) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.animationClass = 'bottom';

    $scope.className = '';
    $scope.avatar = false;

    $scope.ripoff = function() {
        $scope.className = 'ripped';
        audio.play('/audio/ripping-paper-31.wav');
        $timeout(function() {
            $location.url("/tr_write");
        }, 500);
    };
    $scope.clickedAva = function() {
        $scope.avatarSize = $scope.avatar ? 'big' : '';
        $scope.avatar = !$scope.avatar;
    };
  });
