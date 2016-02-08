'use strict';

describe('Controller: MyRoutesCtrl', function () {

  // load the controller's module
  beforeEach(module('bahndingApp'));

  var MyRoutesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyRoutesCtrl = $controller('MyRoutesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyRoutesCtrl.awesomeThings.length).toBe(3);
  });
});
