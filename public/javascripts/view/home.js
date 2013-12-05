define(['angular'], function(angular){
    'use strict';
    var mainModule = angular.module('homeModule', [ 'ngRoute' ]);

    mainModule.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl :   'partials/home',
            controller  :   'homeController'
        });
    }]);

    mainModule.controller('homeController', ['$scope', function($scope){
        $scope.moduleName = mainModule.name;
    }]);

    mainModule.directive('appName', function(){
        return {
            replace : true,
            controller : ['$scope', '$http', function($scope, $http){
                $scope.appName = null; //placeholder
                
                $http.get('/api/name').success(function(data){
                    $scope.appName = data.name;
                });
            }]
        }
    });
    return mainModule;
});