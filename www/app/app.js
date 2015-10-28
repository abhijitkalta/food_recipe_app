'use strict';
var foodRecipeApp = angular.module('foodRecipeApp',['ionic','ui.router','ngRoute','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
})
})

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "app/home/home.html"
    }) 
  
  $stateProvider
    .state('recList', {
      url: "/recList",
      templateUrl: "app/recList/recList.html",
      controller:  "app/recList/recListController"
    }) 
  
  $stateProvider
    .state('singleRec', {
      url: "/:id",
      templateUrl: "app/singleRec/singleRec.html",
      controller: "app/singleRec/singleRecontroller"
    }) 
  
  $stateProvider
    .state('add', {
      url: "/recList",
      templateUrl: "app/add/add.html",
      controller:  "app/add/addController"
    }) 
  
  $stateProvider
    .state('delete', {
      url: "/delete",
      templateUrl: "app/delete/delete.html",
      controller:  "app/delete/deleteController"
    }) 
  
  $stateProvider
    .state('edit', {
      url: "/edit",
      templateUrl: "app/edit/edit.html",
      controller:  "app/edit/editController"
    }) 
  
   $stateProvider
    .state('one', {
      url: "/edit/:id",
      templateUrl: "app/editOne/editOne.html",
      controller:  "app/editOne/recipeEditController"
    }) 
    
   
})
