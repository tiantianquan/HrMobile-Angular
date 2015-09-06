var angular = require('angular')

var controllers = angular.module('controllers', [])
  .controller('test', function($scope) {
    $scope.str = 'asfasdf'
  })

module.exports = controllers