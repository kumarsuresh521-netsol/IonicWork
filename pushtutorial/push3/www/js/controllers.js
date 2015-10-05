angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $rootScope, $ionicUser, $ionicPush) {
    
    $rootScope.$on('$cordovaPush:tokenReceived', function(event,data){
        alert('success'+data.token);
        console.log('getToken', data.token, data.platform);
        $scope.token = data.token;
    });

    $scope.pushRegister = function(){
        $ionicPush.register({
            canShowAlert: true,
            canSetBadge:true,
            canPlaySound:true,
            canRunActionsOnWake:true,
            onNotification:function(notification){
                return true;
            }
        });
    }
    
    $scope.identifyUser = function(){
        var user = $ionicUser.get();
        
        if(!user.user_id){
            user.user_id = $ionicUser.generateGUID();
        }
        
        /**
 * anguler.extend(user,{
 *             name: 'suresh',
 *             bio: 'Author of'
 *         });
 */
        
        $ionicUser.identify(user).then(function(){
            $scope.identified= true;
            console.log("name"+user.name+"---ID"+user.user_id);
        });
    }
    
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
