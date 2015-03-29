'use strict';

/**
 * @ngdoc function
 * @name currexAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the currexAngularApp
 */
angular.module('currexAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
