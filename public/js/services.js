'use strict';
//
var app = angular.module('routingApp');
//
//
app.service('ScriptService', function($http) {
  this.fetch = function() {
    return $http.get('/scripts');
  }
});

// this.create('ScriptService, function()')
