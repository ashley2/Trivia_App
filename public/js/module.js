'use strict';

var app = angular.module('triviaApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl'})
    .state('category', { url: '/category/:category', templateUrl: 'partials/category.html', controller: 'catCtrl' })
    .state('splash', { url: '/splash', templateUrl: 'partials/splash.html', controller: 'splashCtrl' })
    .state('custom', { url: '/newScript/custom', templateUrl: 'partials/custom.html', controller: 'customCtrl' })

  $urlRouterProvider.otherwise('/');
});
