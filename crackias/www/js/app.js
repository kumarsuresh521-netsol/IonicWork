// Ionic crackias App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'crackias' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'crackias.services' is found in services.js
// 'crackias.controllers' is found in controllers.js
angular.module('crackias', ['ionic', 'crackias.controllers', 'crackias.services'])

//angular.module('crackias', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() { console.log($ionicPlatform);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('page', {
      url: '/page',
      templateUrl: 'templates/news/page.html'
    })
    
    .state('tabs', {
      url: '/tabs',
      templateUrl: 'templates/news/home-tabs.html'
    })
    
    .state('menu', {
      url: '/menu',
      templateUrl: 'templates/news/side-menu.html'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/tabs');
  

})