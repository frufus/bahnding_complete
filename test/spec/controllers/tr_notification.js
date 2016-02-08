'use strict';

describe('Controller: TrNotificationCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var TrNotificationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrNotificationCtrl = $controller('TrNotificationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrNotificationCtrl.awesomeThings.length).toBe(3);
  });
});
