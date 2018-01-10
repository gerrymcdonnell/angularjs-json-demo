//define the angular js module (modulename)
var app13=angular.module('app13',[]);





app13.service('HelloService',function(){  
    this.helloService=function(){
        console.log('hello service');
    };  
});

app13.factory('HelloFactory',function(){  
    var factory={};

    factory.helloFactory=function(){
        console.log('hello factory');
    };
    return factory;
});


app13.controller('mainCtrl',function(HelloService,HelloFactory){      
    HelloFactory.helloFactory();
    HelloService.helloService();
 });

