mainApp.controller("StationDataLoginController", function ($scope, $rootScope, EmployeeLoginService) {


    getCareerProfileByStation = function (station) {
        EmployeeLoginService.getLoginEmployeeByStation(station)
            .then(function (response) {
                $scope.employeeCareer = response.data;
                console.log(response)
                // $(document).ready(function () {
                //     $('#data-table').DataTable();
                // });
            }).catch(function (e) {
                console.log("Error: " + e);
            })

    }

    getCareerProfileByStation($rootScope.station.station)

})

