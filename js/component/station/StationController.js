mainApp.controller('StationController', function ($scope, $location, StationService) {

    $scope.viewStation = function (data) {
        console.log(data);
    }

    getStation = function () {
        StationService.getDistinctStation()
            .then(function (response) {
                $scope.stations = {};
                $scope.stations = response.data;
                console.log($scope.stations)
            })
    }
    getStation();
});