mainApp.service("StationService", function ($http, $rootScope) {

    var BASE_LINK = "http://localhost:8080/api/resource/station";


    this.deleteEmployeeFromStation = function(employeeId, station) {
        return $http({
            method: "DELETE",
            url: BASE_LINK + "/deleteEmployeeFromStation/" + employeeId + "/" + station
        })
    }

    this.getCareerProfileByStation = function (physicalStatoion) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getCareerProfileByStation/" + physicalStatoion
        })
    }

    this.saveStation = function (data, station) {
        return $http({
            method: "POST",
            url: BASE_LINK + "/saveStation",
            data: ({
                employeeId: data.employee_id,
                station: station
            })
        })
    }
})