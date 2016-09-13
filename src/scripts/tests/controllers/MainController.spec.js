/*globals describe, beforeEach, afterEach, module, inject, it, expect*/

describe('MainController', function () {

    'use strict';

    var $scope,
        $controller,
        $rootScope,
        $location,
        mainController;

    function createController() {

        $scope = $rootScope.$new();
        mainController = $controller('Main', {

            '$scope': $scope,
            '$location': $location
        });
    }

    beforeEach(function () {

        module('CappAndSonApp');

        inject(function (_$rootScope_, _$controller_, _$location_) {

            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $location = _$location_;
        });
    });

    afterEach(function () {

        $scope = undefined;
        mainController = undefined;
    });

    describe('init', function () {

        it('should set $scope.loadDate to the current timestamp', function () {

            createController();

            expect($scope.loadDate).toBeCloseTo(new Date().getTime(), -100);
        });

        it('should set $scope.enquiryFormSubmitted to false', function () {

            createController();

            expect($scope.enquiryFormSubmitted).toBe(false);
        });

        it('should set $scope.enquiryFormSubmitted to true if the correct query string exists', function () {

            spyOn($location, 'search').and.returnValue({

                sent: '1'
            });

            createController();

            expect($scope.enquiryFormSubmitted).toBe(true);
        });
    });
});
