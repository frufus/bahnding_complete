'use strict';

describe('Controller: Filter1Ctrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var Filter1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Filter1Ctrl = $controller('Filter1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Filter1Ctrl.awesomeThings.length).toBe(3);
  });
});
