'use strict';

describe('Controller: TrainNotificationCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var TrainNotificationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrainNotificationCtrl = $controller('TrainNotificationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrainNotificationCtrl.awesomeThings.length).toBe(3);
  });
});
