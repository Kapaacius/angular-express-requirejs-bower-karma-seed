require.config({
    baseUrl :   '../',
    paths  :   {
        angular         :   'vendor/angular',
        angularRoute    :   'vendor/angular-route',
        app             :   'javascripts/app',
        jquery          :   'vendor/jquery'
    },
    shim : {
        angular  :{
            exports : "angular"
        },
        angularRoute: ['angular']
    }
});

require([
    'angular',
    'app',
    'jquery',
    'angularRoute',
], function(angular, app, $){
    'use strict';
    var $html = $(document.documentElement);
    angular.element().ready(function() {
        $html.addClass('ng-app');
        angular.bootstrap($html, [app.name]);
    });
});