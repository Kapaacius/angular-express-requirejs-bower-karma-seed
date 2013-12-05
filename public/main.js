require.config({
    baseUrl:    'javascripts/',
    paths  :   {
        angular         :   'vendor/angular/angular',
        angularRoute    :   'vendor/angular-route/angular-route',
        jquery          :   'vendor/jquery',
        modules         :   'modules'
    },
    shim : {
        angular  :{
            exports : "angular"
        },
        angularRoute : {
            deps    :   ['angular']
        }
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'modules',
    'angularRoute'
], function(angular, modules){
    'use strict';

    var moduleNames = modules.map(function(module){ //retrieve all module names
        return module.name;
    });

    var doc = angular.element(document.documentElement);

    doc.addClass('ng-app');
    angular.bootstrap(doc, moduleNames);
});
