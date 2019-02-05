mainApp.controller("StationDataLoginController", function ($scope, $rootScope, EmployeeLoginService) {

    $scope.exportPdf = function () {
        var doc = new jsPDF();
        doc.autoTable({html: '#data-table'});
        doc.save('Login Data.pdf');
    }

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

