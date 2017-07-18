/**
 * Created by Home on 7/11/2017.
 */
angular.module("myApp")
    .controller("userDetailsTableCtrl", function($scope,$location){
        var getLocalStorage = localStorage.getItem("userData");
        getLocalStorage = JSON.parse(getLocalStorage);
        $scope.userData = getLocalStorage;
        $scope.remove = function (index){
            getLocalStorage = localStorage.getItem("userData");
            getLocalStorage = JSON.parse(getLocalStorage);
            getLocalStorage.splice(index,1);
            localStorage.setItem("userData", JSON.stringify(getLocalStorage));
            $scope.userData = getLocalStorage;
        }
        $scope.edit = function(index){
            localStorage.setItem("index", JSON.stringify(index));
            $location.path("/addUser");
        }
    })