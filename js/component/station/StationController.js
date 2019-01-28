mainApp.controller('StationController', function ($scope, $rootScope, $location, EmployeeCareerProfileService) {

    $scope.viewStation = function (data) {
        $rootScope.station = data;
        $location.path("/station-data")
    }

    getStation = function () {
        EmployeeCareerProfileService.getDistinctStation()
            .then(function (response) {
                $scope.stations = {};
                $scope.stations = response.data;
                console.log($scope.stations)
            })
    }
    getStation();
});