//define the angular js module (modulename)
var app14=angular.module('app14',[]);







app14.controller('mainCtrl',function($scope,$http){ 
    
    //as soon as app starts call get words
    getWords();

    function getWords(){
        var jsonUrl = "http://localhost/speechapp/rest_words/index.json";
        $http.get(jsonUrl).success(
            function(data){
              console.log(data);
               $scope.words = data;
            }
          );
    }
    
    $scope.getDataTest=function(){
        $http.get("myjsondata.json").success(
            function(data){
                $scope.players=data;
            }
        )
    }


    //test speach app
    $scope.getWords=function(){      
        
        var jsonUrl = "http://localhost/speechapp/rest_words/index.json";
        
          //use http service pass in url
            $http.get(jsonUrl).success(
             function(data){
               console.log(data);
                $scope.words = data;
             }
           );
    }


        //test json2
        $scope.getJsonTest=function(){          
            
            var jsonUrl2="http://jsonplaceholder.typicode.com/posts/1"
               //use http service pass in url
                $http.get(jsonUrl2).success(
                 function(data){
                   $scope.results = data;
                 }
               );
        }


 });

