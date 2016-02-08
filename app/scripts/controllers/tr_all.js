'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:TrAllCtrl
 * @description
 * # TrAllCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('TrAllCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.animationClass = 'bottom';

    });
