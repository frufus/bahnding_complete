'use strict';

describe('Controller: Register1Ctrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var Register1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Register1Ctrl = $controller('Register1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Register1Ctrl.awesomeThings.length).toBe(3);
  });
});
