'use strict';

describe('Controller: Register2Ctrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var Register2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Register2Ctrl = $controller('Register2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Register2Ctrl.awesomeThings.length).toBe(3);
  });
});
