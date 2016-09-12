/*globals module*/

module.exports = function (config) {

    'use strict';

    config.set({

        basePath: './',
        frameworks: ['jasmine'],
        singleRun: true,
        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/scripts/src/**/*.js',
            'src/scripts/tests/**/*.spec.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS']
    });
};
