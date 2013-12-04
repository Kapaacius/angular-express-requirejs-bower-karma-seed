var allTestFiles = [],
    TEST_REGEXP  = /test\.js$/,
    file;

// Build test files
for (file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (TEST_REGEXP.test(file)) {
            allTestFiles.push(file);
        }
    }
}

require.config({
    baseUrl:    '/base/public/javascripts',
    paths: {
        angular         :   'vendor/angular/angular',
        angularRoute    :   'vendor/angular-route/angular-route',
        jquery          :   'vendor/jquery/jquery'
    },
    shim: {
        angular  : {
            exports     : "angular"
        },
        angularRoute: {
            deps        :   ['angular']
        }
    },
    // ask requirejs to load these files (all our tests)
    deps: allTestFiles,
    // start test run, once requirejs is done
    callback: window.__karma__.start
});
