require.config({
    baseUrl:    'javascripts/',
    paths  :   {
        angular         :   'vendor/angular/angular',
        angularRoute    :   'vendor/angular/angular-route',
        modules         :   'modules',
        jquery          :   'vendor/jquery'
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
    'jquery',
    'modules',
    'angularRoute'
], function(angular, $, modules){
    'use strict';

    var moduleNames = modules.map(function(module){ //add app to modules list and retrieve all module names
        return module.name;
    });

    var doc = $(document.documentElement);
    angular.element().ready(function() {
        doc.addClass('ng-app');
        angular.bootstrap(doc, moduleNames);
    });
});