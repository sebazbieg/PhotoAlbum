'use strict';

/**
 * @ngdoc function
 * @name photoAlbumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoAlbumApp
 */
angular.module('photoAlbumApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    var vm = this;
    vm.photos = [];

    function activate() {
      getPhotos();
    }

    function getPhotos() {
      $http.get('http://localhost:3000/api/photos')
        .then(function(res){
          vm.photos = res.data;
        });
    }

    activate();
}]);
