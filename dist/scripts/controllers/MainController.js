/*globals angular*/
angular.module('CappAndSonApp').controller('Main', ['$scope', '$location', function ($scope, $location) {

    $scope.loadDate = new Date().getTime();
    $scope.enquiryFormSubmitted = $location.search().sent === '1' ? true : false;
}]);
