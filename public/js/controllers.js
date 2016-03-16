'use strict';

var app = angular.module('triviaApp');

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl');
});


///on click of that category - home submit ng-click
// app.controller('leaderCtrl', function($scope, ScriptService) {
app.controller('leaderCtrl', function($scope, $http) {
  console.log('leaderCtrl');

  $scope.scripts = [];

  $http({
    method: "GET",
    url: "/scripts"
    }).then(function(response){
      $scope.scripts = response.data;
      console.log('scripts', $scope.scripts);
    }, function(error){
      console.log('error');
  });
});

//   $scope.getScripts = function() {
//     ScriptService.fetch()
//     .then(function(res) {
//       var scripts = res.data;
//       $scope.scripts = scripts;
//     }, function(err) {
//       console.error('err:', err);
//     })
//   }
// });
  // ScriptService.fetch()
  // .then(function(res) {
  //   var scripts = res.data;
  //   $scope.scripts = scripts;
  // }, function(err) {
  //   console.error('err:', err);
  // })

//custom trivia
// $scope.addScript = function($scope, ScriptService){   //addQuestion on pageload?
//   ScriptService.create($scope.newScript)
//   .then(function(res){
//     $scope.scripts.push(res.data)
//   }, function(err){
//     console.log(err)
//   })
// }

//delete - custom - trivia


//put - updated - on all four categories
