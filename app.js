var module = angular.module("myApp", ["ngRoute"])
module.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("")
    $routeProvider
        .otherwise({redirectTo: "/users"})
        .when("/addUser", {
            templateUrl: "addUser.html",
            controller: "addUserCtrl"
        })
        .when("/users", {
            templateUrl : "userDetailsTable.html",
            controller: "userDetailsTableCtrl"
        })
})