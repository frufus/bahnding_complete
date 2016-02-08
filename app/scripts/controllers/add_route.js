'use strict';

/**
 * @ngdoc function
 * @name bahndingApp.controller:AddRouteCtrl
 * @description
 * # AddRouteCtrl
 * Controller of the bahndingApp
 */
angular.module('bahndingApp')
  .controller('AddRouteCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.animationClass = 'bottom';
        $scope.calender = false;
        $scope.calenderClass = '';
        $scope.setDate = function() {
            $scope.calender = !$scope.calender;
            if($scope.calender) {
                $scope.calenderClass = 'show';
            }else {
                $scope.calenderClass = '';
            }
        }
        $scope.station = false;
        $scope.stationClass = '';
        $scope.setStation = function() {
            $scope.station = !$scope.station;
            if($scope.station) {
                $scope.stationClass = 'show';
            }else {
                $scope.stationClass = '';
            }
        }

    });
