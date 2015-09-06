var angular = require('angular')
var controllers = require('./controllers')
var scss = require('./sass/test.scss')

var app = angular.module('hrmobile', [controllers.name])

module.exports = app


