'use strict';

describe('Controller: SetTrainCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var SetTrainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SetTrainCtrl = $controller('SetTrainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SetTrainCtrl.awesomeThings.length).toBe(3);
  });
});
