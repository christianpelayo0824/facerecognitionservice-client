mainApp.controller("StationDataCentralController", function ($scope, $rootScope, EmployeeCareerProfileService) {

    getCareerProfileByStation = function (station) {

        if (station == undefined) {
            console.log("HIT")
        } else {

            EmployeeCareerProfileService.getCareerProfileByStation(station)
                .then(function (response) {
                    console.log();
                    $scope.employeeCareer = response.data;
                    console.log(response)
                }).catch(function (e) {
                    console.log("Error: " + e);
                })
        }
    }

    getCareerProfileByStation($rootScope.station.station)

})