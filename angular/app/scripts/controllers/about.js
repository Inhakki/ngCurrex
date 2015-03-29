'use strict';

/**
 * @ngdoc function
 * @name currexAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the currexAngularApp
 */
angular.module('currexAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
