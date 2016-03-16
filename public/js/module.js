'use strict';

var app = angular.module('triviaApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider //gives the ability to define states
  //.state(stateName, configObject, )
    .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl'})
    .state('custom', { url: '/custom', templateUrl: 'partials/custom.html', controller: 'customCtrl' })
    .state('herstory', { url: '/herstory', templateUrl: 'partials/herstory.html', controller: 'herstoryCtrl' })
    .state('leader', {url: '/leader', templateUrl: 'partials/leader.html', controller: 'leaderCtrl'})
    .state('splash', { url: '/splash', templateUrl: 'partials/splash.html', controller: 'splashCtrl' })
    .state('stack', { url: '/stack', templateUrl: 'partials/stack.html', controller: 'stackCtrl' })
  //give this a default url, in case it gets a url it doesn't know
  $urlRouterProvider.otherwise('/');
});

//closest thing to an angular "init" function
// app.run(function(SwapiService) {
//   SwapiService.getPeople();
//   console.log('app.run');
// });
