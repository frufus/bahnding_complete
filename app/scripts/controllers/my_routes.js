'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:MyRoutesCtrl
 * @description
 * # MyRoutesCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('MyRoutesCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.animationClass = 'bottom';

    });
