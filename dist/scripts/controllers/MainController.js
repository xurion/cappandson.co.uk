/*globals angular*/
angular.module('CappAndSonApp').controller('Main', ['$scope', function ($scope) {

    $scope.loadDate = new Date().getTime();
}]);