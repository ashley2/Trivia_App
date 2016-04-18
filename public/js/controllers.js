'use strict';

var app = angular.module('triviaApp');

app.controller('homeCtrl', function($scope, $http, $state, $stateParams) {
  console.log('homeCtrl');
  $scope.category = 'leader';

  $scope.goToCategory = function(category) {
    console.log('click');
    console.log('gotToCategory', category);
    var category = $stateParams.category;
    $state.go('category', {
      category: category
    })
  }
})

app.controller('catCtrl', function($scope, $http, $stateParams, $state) {
  $scope.scripts = [];
  console.log('catCtrl');

  $scope.colors = function(){

  var colors =['color1', 'color2', 'color3', 'color4', 'color5'];
  var color = colors[Math.floor(Math.random()*colors.length)];

  return color;
}

  $scope.getSelection = function(script) {
    console.log('click');
    console.log('script:', script);
  }

    $http({
      method: "GET",
      url: "/scripts/category/" + $state.params.category
      }).then(function(response){
        $scope.scripts = response.data;
      }, function(error){
        console.log('error');
    });
});

app.controller('customCtrl', function($scope, $http, $stateParams, $state) {
  console.log('working');
  $scope.newScripts = [];

    $http({
      method: "GET",
      url: "/newScript/custom"
      }).then(function(response){
        $scope.newScript = response.data;
      }, function(error){
        console.log('error');
    });

    $scope.createScript = function(){
      var newScript = $scope.newScript;
      newScript.category = "custom";
      console.log(newScript);
       $scope.newScripts.push(newScript);
       console.log($scope.newScripts);
       $scope.newScript = {};

    $http({
      method: "POST",
      url: "/newScript/custom",
      data: newScript
      }).then(function(response){
        console.log('result', response);
      }, function(error){
        console.log('error');
    });
    }

    $scope.deleteScript = function(index) {
      var deleted = $scope.newScripts.splice(index, 1);
      $http({
        method: 'DELETE',
        url: `/newScript/custom/delete/${index}`
      })
      .then(function(data) {
        console.log('success');
      }, function(err) {
        console.error(err);
      })
    }
    $scope.editScript = function(index) {
      var edit = $scope.newScripts.splice(index, 1);
      $http({
        method: 'PUT',
        url: `/newScript/custom/delete/${index}`
      })
      .then(function(data) {
        console.log('success');
      }, function(err) {
        console.error(err);
      })
    }
});
