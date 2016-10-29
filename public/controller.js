var app=angular.module("myapp",[]);

app.controller("mycontroller",["$scope","$http",function($scope,$http){

          /*var person1 ={
          	name: "Jyothsna",
          	email: "joe@gmail.com",
          	mobile:" 5656348537"
          }
          var person2 ={
          	name: "Anusha",
          	email: "anu@gmail.com",
          	mobile:" 522342444"
          }
          var person3 ={
          	name: "Anil",
          	email: "ani@gmail.com",
          	mobile:" 9687465666"
          }*/
var refresh= function(){
          $http.get("./contactList").success(function(response){

              $scope.contactList=response;
              $scope.contact="";

          });

      }
refresh();
          $scope.addContact = function(){

          	$http.post("/contactList",$scope.contact).success(function(response){

          		console.log("Inserted");
          		refresh();
          	})

          }

          $scope.editContact = function(id){

          	$http.get("/contactList/" + id).success(function(response){

          		
          		$scope.contact=response;
          	
          		
          	})

          }
            $scope.updateContact = function(){

          $http.put("/contactList/" + $scope.contact._id , $scope.contact)
          .success(function(response){

          	refresh();
          })

         }

         $scope.deleteContact = function(id){
         	$http.delete("/contactList/" + id).success(function(response){

         			refresh();


         	})



         }
        
        

}])