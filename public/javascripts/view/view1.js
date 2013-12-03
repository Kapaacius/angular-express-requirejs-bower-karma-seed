define(['angular'], function(angular){
    'use strict';
    var viewModule = angular.module('viewModule', [ 'ngRoute' ]);

    viewModule.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/view', {
            templateUrl :   'partials/view',
            controller  :   'viewController'
        });
    }]);

    viewModule.controller('viewController', ['$scope', function($scope){
        $scope.moduleName = viewModule.name;
    }]);

    return viewModule;
});