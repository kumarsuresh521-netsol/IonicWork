angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  console.log($scope);
  console.log(ionicMaterialMotion);
    console.log(ionicMaterialInk);
    
      $scope.chat = Chats.get($stateParams.chatId);
      // Set Header
        //$scope.showHeader();
        //$scope.clearFabs();
        //$scope.setHeaderFab('left');
    
        // Delay expansion
        $timeout(function() {
            $scope.isExpanded = true;
            //$scope.setExpanded(true);
        }, 300);
    
        // Set Motion
        ionicMaterialMotion.fadeSlideInRight();
    
        // Set Ink
        ionicMaterialInk.displayEffect();
    })
    
    .controller('AccountCtrl', function($scope) {
      $scope.settings = {
        enableFriends: true
      };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, Chats) {
    
    console.log(ionicMaterialMotion);
    console.log(ionicMaterialInk);
    
      $scope.chat = Chats.get($stateParams.chatId);
      // Set Header
        $scope.showHeader();
        $scope.clearFabs();
        $scope.setHeaderFab('left');
    
        // Delay expansion
        $timeout(function() {
            $scope.isExpanded = true;
            $scope.setExpanded(true);
        }, 300);
    
        // Set Motion
        ionicMaterialMotion.fadeSlideInRight();
    
        // Set Ink
        ionicMaterialInk.displayEffect();
    })
    
    .controller('AccountCtrl', function($scope) {
      $scope.settings = {
        enableFriends: true
      };
});
