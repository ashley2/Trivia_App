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
  // console.log('params:', $stateParams.category);
  console.log('catCtrl');

    $http({
      method: "GET",
      url: "/scripts/category/" + $state.params.category
      }).then(function(response){
        $scope.scripts = response.data;
        console.log('scripts', $scope.scripts);
      }, function(error){
        console.log('error');
    });
  // $scope.scripts = [];
  // var params = $stateParams.category;
  // console.log('params', $stateParams);
});
// app.controller('stackCtrl', function($scope, $http, $stateParams) {
//   console.log('catCtrl');
//
//   // $scope.scripts = [];
//   // var params = $stateParams.category;
//   // console.log('params', $stateParams);
// });
// app.controller('leadersCtrl', function($scope, $http, $stateParams) {
//   console.log('catCtrl');
//
//   // $scope.scripts = [];
//   // var params = $stateParams.category;
//   // console.log('params', $stateParams);
// });
// app.controller('herstoryCtrl', function($scope, $http, $stateParams) {
//   console.log('catCtrl');
//
//   // $scope.scripts = [];
//   // var params = $stateParams.category;
//   // console.log('params', $stateParams);
// });
