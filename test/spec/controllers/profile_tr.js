'use strict';

describe('Controller: ProfileTrCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var ProfileTrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileTrCtrl = $controller('ProfileTrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfileTrCtrl.awesomeThings.length).toBe(3);
  });
});
