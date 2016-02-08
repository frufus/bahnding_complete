'use strict';

/**
 * @ngdoc directive
 * @name bahndingApp.directive:toggleClass
 * @description
 * # toggleClass
 */
angular.module('bahndingApp')
  .directive('toggleClass', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          element.bind('click', function() {
              element.toggleClass(attrs.toggleClass);
          });
      }
    };
  });
