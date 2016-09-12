/*globals describe, beforeEach, module, inject, it, expect*/

describe('MainController', function () {

    'use strict';

    var $scope,
        mainController;

    beforeEach(function () {

        module('CappAndSonApp');

        inject(function ($rootScope, _$controller_) {

            $scope = $rootScope.$new();
            mainController = _$controller_('Main', {

                '$scope': $scope
            });
        });
    });

    describe('init', function () {

        it('should set $scope.loadDate to the current timestamp', function () {

            expect($scope.loadDate).toBeCloseTo(new Date().getTime(), -100);
        });
    });
});
