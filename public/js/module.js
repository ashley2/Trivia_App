'use strict';

var app = angular.module('triviaApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl'})
    .state('category', { url: '/category/:category', templateUrl: 'partials/category.html', controller: 'catCtrl' })
    .state('splash', { url: '/splash', templateUrl: 'partials/splash.html', controller: 'splashCtrl' })

  $urlRouterProvider.otherwise('/');
});


// 'use strict';
//
// var app = angular.module('triviaApp', ['ui.router']);
//
// app.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl'})
//     .state('custom', { url: '/custom', templateUrl: 'partials/custom.html', controller: 'customCtrl' })
//     .state('herstory', { url: '/herstory', templateUrl: 'partials/herstory.html', controller: 'herstoryCtrl' })
//     .state('category', { url: '/category', templateUrl: 'partials/category.html', controller: 'catCtrl' })
//     .state('leaders', {url: '/leaders', templateUrl: 'partials/leaders.html', controller: 'leaderCtrl'})
//     .state('splash', { url: '/splash', templateUrl: 'partials/splash.html', controller: 'splashCtrl' })
//     .state('stack', { url: '/stack', templateUrl: 'partials/stack.html', controller: 'stackCtrl' })
//   //give this a default url, in case it gets a url it doesn't know
//   $urlRouterProvider.otherwise('/');
// });
