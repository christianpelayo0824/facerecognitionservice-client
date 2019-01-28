mainApp.controller("StationDataController", function ($scope, $rootScope, $location) {

    $scope.centralData = function () {
        $location.path("/station-data-central");
    }

    $scope.logoutData = function () {
        $location.path("/station-data-logout");
    }

    $scope.loginData = function () {
        $location.path("/station-data-login");
    }
})