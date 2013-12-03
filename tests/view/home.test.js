define(['../../public/javascripts/view/home.js', 'angular', 'angularRoute'], function(app){
    'use strict';
    describe('home module', function(){
        var controller, scope;
        beforeEach(module(app.name));
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            controller = $controller('homeController', {
                $scope        : scope
            });
        }));
        it('controller should exist', function(){
            expect(controller).toBeDefined();
        });
    });
});