//define the angular js module (modulename)
var app2=angular.module('app2',[]);

//dependecy injection
app2.controller('ctrl1',function($scope){
    
    //gen random numbers
    $scope.randomNum1=Math.floor((Math.random()*10)+1);
    $scope.randomNum2=Math.floor((Math.random()*10)+1);

});


app2.controller('badCtrl',function($scope){
    
    var badFeelings=["shit","awfull","sick","ill"];

    $scope.bad=badFeelings[Math.floor((Math.random()*3)+1)];

});

app2.controller('goodCtrl',function($scope){
    
    var goodFeelings=["happy","cool","awesome"];

    $scope.good=goodFeelings[Math.floor((Math.random()*2)+1)];
    
});