mainApp.controller("StationDataController", function ($scope, $rootScope, $location, EmployeeCareerProfileService, EmployeeLoginService, EmployeeLogoutService) {

    $scope.centralData = function () {
        $location.path("/station-data-central");
    }

    $scope.logoutData = function () {
        $location.path("/station-data-logout");
    }

    $scope.loginData = function () {
        $location.path("/station-data-login");
    }

    countAllEmployee = function(station) {
        EmployeeCareerProfileService.countAllEmployee(station)
            .then(function(response){
                console.log(response.data);
                $scope.noOfCentralData = response.data;
            })
    }

    countAllLoginEmployeeByStation = function(station) {
        EmployeeLoginService.countAllLoginEmployeeByStation(station)
            .then(function(response){
                console.log(response.data);
                $scope.noOfLoginData = response.data;
            })
    }

    countAllLogoutEmployeeByStation = function(station) {
        EmployeeLogoutService.countAllLogoutEmployeeByStation(station)
            .then(function(response){
                console.log(response.data);
                $scope.noOfLogoutData = response.data;
            })
    }

    countAllLogoutEmployeeByStation($rootScope.station.station)
    countAllLoginEmployeeByStation($rootScope.station.station)
    countAllEmployee($rootScope.station.station)
})