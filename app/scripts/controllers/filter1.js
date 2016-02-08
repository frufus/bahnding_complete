'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:Filter1Ctrl
 * @description
 * # Filter1Ctrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('Filter1Ctrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.$broadcast('rzSliderForceRender');
        $scope.slider = {
            min: 18,
            max: 28,
            options: {
                floor: 0,
                ceil: 99,
                step: 1,
                hideLimitLabels: true
            }
        };
  });
