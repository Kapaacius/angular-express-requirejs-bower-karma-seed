define(['../../public/javascripts/view/home.js', 'angular', 'angularRoute'], function(app){
    'use strict';
    describe('home module', function(){
        var controller, scope, $rootScope, $compile;

        function compileToHtml(html){
            var element = $compile(html)($rootScope);
            $rootScope.$apply();
            return element;
        }

        beforeEach(module(app.name));
        beforeEach(inject(function($controller, _$rootScope_, _$compile_){
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            scope = $rootScope.$new();
            controller = $controller('homeController', {
                $scope        : scope
            });
        }));
        it('controller should exist', function(){
            expect(controller).toBeDefined();
        });

        it('should fetch app name from server', inject(function($httpBackend){
            $httpBackend.expectGET('/api/name').respond({name : 'seed'});
            var el = compileToHtml('<div data-app-name></div>');
            $httpBackend.flush();
            expect(el.scope().appName).toEqual('seed');
        }));
    });
});