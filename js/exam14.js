//define the angular js module (modulename)
var app14=angular.module('app14',[]);







app14.controller('mainCtrl',function($scope,$http){      
    
    $scope.getDataTest=function(){
        $http.get("myjsondata.json").success(
            function(data){
                $scope.players=data;
            }
        )
    }


    $scope.translate=function(){
        var words=$scope.wordsToTranslate.replace(/ /g,"+");
        
        var jsonUrl = "http://newjustin.com/translateit.php?action=translations&english_words=" + words;
        
           //use http service pass in url
            $http.get(jsonUrl).success(
             function(data){
               $scope.translated = data;
             }
           );
    }

    //test speach app
    $scope.getExercises=function(){      
        
        var jsonUrl = "http://localhost/speechapp/rest_exercises/index.json";
        
           //use http service pass in url
            $http.get(jsonUrl).success(
             function(data){
               $scope.exercises = data;
             }
           );
    }

 });

