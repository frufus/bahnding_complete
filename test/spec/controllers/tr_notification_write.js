'use strict';

describe('Controller: TrNotificationWriteCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var TrNotificationWriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrNotificationWriteCtrl = $controller('TrNotificationWriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrNotificationWriteCtrl.awesomeThings.length).toBe(3);
  });
});
