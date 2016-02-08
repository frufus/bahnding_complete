'use strict';

describe('Controller: TrAllCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var TrAllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrAllCtrl = $controller('TrAllCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrAllCtrl.awesomeThings.length).toBe(3);
  });
});
