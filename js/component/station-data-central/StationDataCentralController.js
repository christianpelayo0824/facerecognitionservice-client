mainApp.controller("StationDataCentralController", function ($scope, $rootScope, StationService, EmployeeCareerProfileService, $location) {

    $scope.exportPdf = function () {
        var doc = new jsPDF();
        doc.autoTable({ html: '#data-table' });
        doc.save('Login Data.pdf');
    }

    $scope.deleteEmployeeFromStation = function (employee) {
        StationService.deleteEmployeeFromStation(employee.employee_id, $rootScope.station.station)
            .then(function (response) {
                $scope.employeeCareer.splice(employee, 1)
                    swal({
                        title: "Good job!",
                        text: "Data succesfully deleted!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
            }).catch(function (e) {
                console.log("Error: " + e);
            })
    }

    $scope.saveStation = function (empCareer) {
        StationService.saveStation(empCareer, $rootScope.station.station)
            .then(function (response) {
                console.log(response.data);
                if (response.data == true) {
                    $('#exampleModalCenter').modal('hide');
                    $location.path('/station-data');
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                } else {
                    swal({
                        title: "Warning!",
                        text: "Employee Already Exist",
                        icon: "warning",
                        button: "Okay",
                    });
                }
            }).catch(function (e) {
                console.log("Error: " + e);
            })

    }

    $scope.getAllCareerProfile = function () {
        EmployeeCareerProfileService.getAllCareerProfile()
            .then(function (response) {
                console.log(response.data);
                $scope.employeeCareerProfile = response.data;
            })
    }

    getCareerProfileByStation = function (station) {

        if (station == undefined) {
            console.log("HIT")
        } else {
            StationService.getCareerProfileByStation(station)
                .then(function (response) {
                    $scope.employeeCareer = response.data;
                }).catch(function (e) {
                    console.log("Error: " + e);
                })
        }
    }

    getCareerProfileByStation($rootScope.station.station)

})