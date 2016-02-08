'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('MenuCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.animationClass = 'bottom';

  });
