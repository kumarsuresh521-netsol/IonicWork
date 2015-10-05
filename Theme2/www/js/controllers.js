angular.module('starter.controllers', [])

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.controller('CategoryBlindCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
   // $scope.$on('$stateChangeSuccess', function() {
    $timeout(function() {
        ionicMaterialMotion.blinds({
            selector: '.animate-blinds .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
   // })
})

.controller('CategoryfadeSlideCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
   // $scope.$on('$stateChangeSuccess', function() {
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
    //})
})

.controller('fadeSlideInRightCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    //$scope.$on('$stateChangeSuccess', function() {
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in-right .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
   // })
})

.controller('fadeSlideInRightSlideUpCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
   // $scope.$on('$stateChangeSuccess', function() {
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
   // })
})

.controller('imageslideCtrl', function($scope, $ionicLoading, $timeout) {
   $scope.myActiveSlide = 1;
   $ionicLoading.show({
      template: 'Loading...'
    });
    
    $timeout(function(){
        $ionicLoading.hide();
    }, 5000);
})

.controller('tinderSlideCtrl', function($scope, $ionicLoading, $timeout) {
   console.log('CARDS CTRL');
  var cardTypes = [
    { image: 'img/city1.jpg' },
    { image: 'img/city2.jpg' },
    { image: 'img/city3.jpg' },
    { image: 'img/city4.jpg' },
    { image: 'img/city5.jpg' },
    { image: 'img/city6.jpg' },
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
  
  
  
})

