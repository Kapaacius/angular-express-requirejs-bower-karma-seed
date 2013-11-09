define(['angular'], function(angular){
    'use strict';
    return angular.module('Firecracker', ['ngRoute']).config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/test", {
            templateUrl:    'views/main.jade',
            controller: 'FireCracker'
        })
    }]);
});