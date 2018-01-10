//define the angular js module (modulename)
var app1=angular.module('app1',[]);

//dependecy injection
app1.controller('ctrl1',function($scope){
    $scope.first=1;
    $scope.second=2;


    //fucntion ins9ide scope object
    $scope.updateValue=function(){
        $scope.calculation=$scope.first + ' + ' +$scope.second + " = " + (+$scope.first +$scope.second);
    };

});