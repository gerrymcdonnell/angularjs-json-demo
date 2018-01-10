//define the angular js module (modulename)
var app4=angular.module('app4',[]);

//dependecy injection
app4.controller('eventCtrl',function($scope){  
    
    $scope.blur=0;
    $scope.click=0;

    $scope.disableButton=true;

});


