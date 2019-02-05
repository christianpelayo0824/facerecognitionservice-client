mainApp.controller("StationDataCentralController", function ($scope, $rootScope, EmployeeCareerProfileService) {

    $scope.test = function () {
        
        var doc = new jsPDF()
        doc.autoTable({html: '#data-table'});
        doc.save('table.pdf');

    }

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