'use strict';

describe('Controller: TrReciveCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var TrReciveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrReciveCtrl = $controller('TrReciveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrReciveCtrl.awesomeThings.length).toBe(3);
  });
});
