'use strict';

var app = angular.module('routingApp');

app.service('ScriptService', function($http) {
  this.fetch = function() {
    return $http.get('/scripts');
  }
  this.create = function(newScript) {
    return $http.post('/scripts', newScript);
  }

  this.edit = function(script) {
    return $http.put(`/scripts/${script.id}`);
  }

  this.remove = function(script) {
    return $http.delete(`/scripts/${script.id}`);
  }
});
