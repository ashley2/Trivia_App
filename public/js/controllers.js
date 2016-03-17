'use strict';

var app = angular.module('triviaApp');


// var regexUrl = '/\w+$/m';

app.controller('homeCtrl', function($scope, $http, $state, $stateParams) {
  console.log('homeCtrl');
  $scope.category = 'leader';

  $scope.goToCategory = function(category) {
    console.log('click');
    console.log('gotToCategory', category);
    var category = $stateParams.category;
    $state.go('category', {
      category: category
      // category: `${category}`
    })
  }
})

app.controller('catCtrl', function($scope, $http, $stateParams, $state) {
  $scope.scripts = [];
  console.log('catCtrl');

  $scope.getSelection = function(script) {
    console.log('click');
    console.log('script:', script);
  }

    $http({
      method: "GET",
      url: "/scripts/category/" + $state.params.category
      }).then(function(response){
        $scope.scripts = response.data;
        console.log('scripts', $scope.scripts);
      }, function(error){
        console.log('error');
    });
    //Post

    $scope.createScript = function(){
      // var id = uuid();
      // var newScript = $scope.newScript;

    $http({
      method: "POST",
      url: "/scripts/category/",
      data: { category: 'custom', question: 'q20', answer1: 'a1', answer2: 'a2', answer3: 'a3'}
      }).then(function(response){

        // $scope.scripts.push(newScript);
        // console.log('scripts', $scope.scripts);
      }, function(error){
        console.log('error');
    });
  }
});
  //   //Delete -id
  //   $http({
  //     method: "DELETE",
  //     url: "/scripts/category/" + $state.params.category
  //     }).then(function(response){
  //       $scope.scripts = response.data;
  //       console.log('scripts', $scope.scripts);
  //     }, function(error){
  //       console.log('error');
  //   });
  //   //put id
  //   $http({
  //     method: "PUT",
  //     url: "/scripts/category/" + $state.params.category
  //     }).then(function(response){
  //       $scope.scripts = response.data;
  //       console.log('scripts', $scope.scripts);
  //     }, function(error){
  //       console.log('error');
  //   });
  //
  // });

    // $scope.addUpload = function() {
    //
    //   ScriptService.create($scope.newScript)
    //   .then(function(res) {
    //
    //   }, function(err) {
    //   console.error('err:', err);
    //   })
    // };
    //
    // $scope.removeUpload = function(script) {
    //   ScriptService.remove(script)
    //   .then(function(res) {
    //     var index = $scope.scripts.indexOf(script);
    //     $scope.scripts.splice(index, 1);
    //   }, function(err) {
    //     console.error('err:', err);
    //   });
    // }
    //
    // $scope.editScript = function(script) {
    //   ScriptService.edit(script)
    //   .then(function(res) {
    //     var index = $scope.scripts.indexOf(script);
    //     $scope.scripts.splice(index, 1);
    //   }, function(err) {
    //     console.error('err:', err);
    //   });
    // }
