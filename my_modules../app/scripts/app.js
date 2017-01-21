'use strict';

/**
 * @ngdoc overview
 * @name photoAlbumApp
 * @description
 * # photoAlbumApp
 *
 * Main module of the application.
 */
angular
  .module('photoAlbumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
