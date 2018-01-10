//define the angular js module (modulename)
var app3=angular.module('app3',[]);

//dependecy injection
app3.controller('gListCtrl',function($scope){  
    
    $scope.groceries=[
        {item: "bread",purchased: false},
        {item: "milk",purchased: true},
        {item: "soup",purchased: false},
        {item: "eggs",purchased: true}
    ];

    //return different
    $scope.getList=function(){
        return $scope.showList ? "ulgrocerylist.htm" : "grocerylist.htm";
    }

});


