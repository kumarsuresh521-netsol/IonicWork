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

.controller('PlaylistsCtrl', function($scope) {

  /*************************************************************
  **************** Push Plugin Start Here **********************
  *************************************************************/ 
  
  var pushNotification;
  pushNotification = window.plugins.pushNotification;
  
  var device = ionic.Platform.device(); 
  
  if ( device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos" ){
    pushNotification.register(
    successHandler,
    errorHandler,
    {
        "senderID":"replace_with_sender_id",
        "ecb":"onNotification"
    });
    } else { console.log(" else part ");
        pushNotification.register(
        tokenHandler,
        errorHandler,
        {
            "badge":"true",
            "sound":"true",
            "alert":"true",
            "ecb":"onNotificationAPN"
        });
    }
    
    
    // Android and Amazon Fire OS
    function onNotification(e) { console.log("OnNotification"); console.log(e);
        $("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');
    
        switch( e.event )
        {
        case 'registered':
            if ( e.regid.length > 0 )
            {
                $("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
                // Your GCM push server needs to know the regID before it can push to this device
                // here is where you might want to send it the regID for later use.
                console.log("regID = " + e.regid);
            }
        break;
    
        case 'message':
            // if this flag is set, this notification happened while we were in the foreground.
            // you might want to play a sound to get the user's attention, throw up a dialog, etc.
            if ( e.foreground )
            {
                $("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');
    
                // on Android soundname is outside the payload.
                // On Amazon FireOS all custom attributes are contained within payload
                var soundfile = e.soundname || e.payload.sound;
                // if the notification contains a soundname, play it.
                var my_media = new Media("/android_asset/www/"+ soundfile);
                my_media.play();
            }
            else
            {  // otherwise we were launched because the user touched a notification in the notification tray.
                if ( e.coldstart )
                {
                    $("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
                }
                else
                {
                    $("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
                }
            }
    
           $("#app-status-ul").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
               //Only works for GCM
           $("#app-status-ul").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
           //Only works on Amazon Fire OS
           $status.append('<li>MESSAGE -> TIME: ' + e.payload.timeStamp + '</li>');
        break;
    
        case 'error':
            $("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
        break;
    
        default:
            $("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
        break;
      }
    }
    
    // result contains any message sent from the plugin call
    function successHandler (result) { console.log("success Handler"); console.log(result);
        alert('result = ' + result);
    }

    // result contains any error description text returned from the plugin call
    function errorHandler (error) {  console.log("error Handler"); console.log(result);
        alert('error = ' + error);
    }
    
    function tokenHandler (result) {  console.log("token Handler"); console.log(result);
        // Your iOS push server needs to know the token before it can push to this device
        // here is where you might want to send it the token for later use.
        alert('device token = ' + result);
    }
  
  /*************************************************************
  **************** Push Plugin End Here ************************
  *************************************************************/ 
  
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
