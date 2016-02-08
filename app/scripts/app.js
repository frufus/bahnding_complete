'use strict';

/**
 * @ngdoc overview
 * @name bahndingApp
 * @description
 * # bahndingApp
 *
 * Main module of the application.
 */
angular
  .module('bahndingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'rzModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/alert', {
        templateUrl: 'views/alert.html',
        controller: 'AlertCtrl',
        controllerAs: 'alert'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/my_routes', {
        templateUrl: 'views/my_routes.html',
        controller: 'MyRoutesCtrl',
        controllerAs: 'myRoutes'
      })
      .when('/profile_tr', {
        templateUrl: 'views/profile_tr.html',
        controller: 'ProfileTrCtrl',
        controllerAs: 'profileTr'
      })
      .when('/register1', {
        templateUrl: 'views/register1.html',
        controller: 'Register1Ctrl',
        controllerAs: 'register1'
      })
      .when('/register2', {
        templateUrl: 'views/register2.html',
        controller: 'Register2Ctrl',
        controllerAs: 'register2'
      })
      .when('/add_route', {
        templateUrl: 'views/add_route.html',
        controller: 'AddRouteCtrl',
        controllerAs: 'addRoute'
      })
      .when('/tr_receive', {
        templateUrl: 'views/tr_receive.html',
        controller: 'TrReceiveCtrl',
        controllerAs: 'trReceive'
      })
      .when('/tr_notification_write', {
        templateUrl: 'views/tr_notification_write.html',
        controller: 'TrNotificationWriteCtrl',
        controllerAs: 'trNotificationWrite'
      })
      .when('/tr_notification', {
        templateUrl: 'views/tr_notification.html',
        controller: 'TrNotificationCtrl',
        controllerAs: 'trNotification'
      })
      .when('/tr_write', {
        templateUrl: 'views/tr_write.html',
        controller: 'TrWriteCtrl',
        controllerAs: 'trWrite'
      })
      .when('/tr_all', {
        templateUrl: 'views/tr_all.html',
        controller: 'TrAllCtrl',
        controllerAs: 'trAll'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profile_edit', {
        templateUrl: 'views/profile_edit.html',
        controller: 'ProfileEditCtrl',
        controllerAs: 'profileEdit'
      })
      .when('/filter1', {
        templateUrl: 'views/filter1.html',
        controller: 'Filter1Ctrl',
        controllerAs: 'filter1'
      })
      .when('/filter2', {
        templateUrl: 'views/filter2.html',
        controller: 'Filter2Ctrl',
        controllerAs: 'filter2'
      })
      .when('/set_train', {
        templateUrl: 'views/set_train.html',
        controller: 'SetTrainCtrl',
        controllerAs: 'setTrain'
      })
      .when('/train_notification', {
        templateUrl: 'views/train_notification.html',
        controller: 'TrainNotificationCtrl',
        controllerAs: 'trainNotification'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope) {
        $rootScope.$back = function() {
            window.history.back();
        };
    });
