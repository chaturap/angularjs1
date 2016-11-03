// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// angular.module('starter', ['ionic'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })


angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
       cordova.plugins.Keyboard.disableScroll(true);
     }
     if(window.StatusBar) {
       StatusBar.styleDefault();
     }
   });
 })

.controller('MyCtrl', function($scope) {

    var ctrl = this;

    ctrl.add = add;
    ctrl.data = [
        {
            name: "http://stackoverflow.com/questions/26215355/creating-a-table-in-ionicA",
            code: "shorturl/12ko4",
            limit: 20161029,
            account: "3"
        },
        {
            name: "http://ionicframework.com/docs/components/#grid-responsive",
            code: "shorturl/hu98g",
            limit: 20161029,
            account: "12"
        }
    ]

    
    function add(index) {
        window.alert("Added: " + index);
    }
});

.controller('AppCtrl', function($scope, $http) {
    $scope.data = {};
 
    $scope.submit = function(){
        var link = 'http://localhost:81/IonicServerSave-master/PHP/api.php';

 
        $http.post(link, {username : $scope.data.username}).then(function (res){
            $scope.response = res.data;
        });
    };
});