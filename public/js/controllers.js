'use strict';

var app = angular.module('triviaApp');
// var uuid = require('uuid');

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


});

app.controller('customCtrl', function($scope, $http, $stateParams, $state) {
  console.log('working');
  $scope.newScripts = [];
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
        // console.log('scripts', $scope.newScripts);
      }, function(error){
        console.log('error');
    });
    }
});
// $scope.deleteContact = function(contact) {
//   var index = $scope.contacts.indexOf(contact);
//   $http({
//     method: 'DELETE',
//     url: "/contacts/" + index,
//   })
//   .then(function(data) {
//     $scope.contacts.splice(index, 1);
//   }, function(err) {
//     console.error(err);
//   })
// }
//
// $scope.editContact = function(newContact) {
//   var index = $scope.contacts.indexOf(newContact);
//   $scope.contacts.push($scope.contact);
//   $http({
//     method: 'PUT',
//     url: "/contacts/" + index,
//     data: index
//   })
//   .then(function(data){
//     addContact();
//     console.log('data', data);
//   }, function(err){
//     console.error(err);
//   })
// };
//   $scope.contact = {};
// });
