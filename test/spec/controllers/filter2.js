'use strict';

describe('Controller: Filter2Ctrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var Filter2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Filter2Ctrl = $controller('Filter2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Filter2Ctrl.awesomeThings.length).toBe(3);
  });
});
