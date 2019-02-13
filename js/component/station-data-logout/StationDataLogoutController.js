mainApp.controller("StationDataLogoutController", function ($scope, $rootScope, EmployeeLogoutService, ReasonService) {

    $scope.exportPdf = function () {
        var doc = new jsPDF();
        doc.autoTable({ html: '#data-table' });
        doc.save('Logout Data.pdf');
    }


    $scope.viewLogoutStatus = function (employeeId) {
        ReasonService.getReasonStatusById(employeeId)
            .then(function (response) {
                $scope.reasonStatus = response.data;
                console.log(response.data);
            }).catch(function (e) {
                console.log("Error: " + e);
            })
    }

    getCareerProfileByStation = function (station) {

        if (station == undefined) {
            console.log("HIT")
        } else {
            EmployeeLogoutService.getAllLogoutEmployee(station)
                .then(function (response) {
                    $scope.employeeCareer = response.data;
                }).catch(function (e) {
                    console.log("Error: " + e);
                })
        }
    }

    getCareerProfileByStation($rootScope.station.station)

})