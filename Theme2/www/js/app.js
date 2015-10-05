// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
   // if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

    .state('app.categoryblindeffect', {
        url: '/categoryblindeffect',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoryblindeffect.html',
            controller: 'CategoryBlindCtrl'
        }
      }
    })
    
    .state('app.categoryfadeSlideIn', {
        url: '/categoryfadeSlideIn',
        views: {
          'menuContent': {
            templateUrl: 'templates/categoryfadeSlideIn.html',
            controller: 'CategoryfadeSlideCtrl'
        }
      }
    })
    
    .state('app.fadeSlideInRight', {
        url: '/fadeSlideInRight',
        views: {
          'menuContent': {
            templateUrl: 'templates/fadeSlideInRight.html',
            controller: 'fadeSlideInRightCtrl'
        }
      }
    })
    
    .state('app.fadeSlideInRightSlideUp', {
        url: '/fadeSlideInRightSlideUp',
        views: {
          'menuContent': {
            templateUrl: 'templates/fadeSlideInRightSlideUp.html'//,
            //controller: 'fadeSlideInRightSlideUpCtrl'
        }
      }
    })
    
    .state('app.imageslide', {
        url: '/imageslide',
        views: {
          'menuContent': {
            templateUrl: 'templates/imageslide.html',
            controller: 'imageslideCtrl'
        }
      }
    })
    
    .state('app.tinderSlide', {
        url: '/tinderSlide',
        views: {
          'menuContent': {
            templateUrl: 'templates/tinderSlide.html',
            controller: 'tinderSlideCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/fadeSlideInRightSlideUp');
});
