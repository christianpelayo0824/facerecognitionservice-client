mainApp.service("EmployeeLoginService", function ($http) {

    var BASE_LINK = "http://192.168.254.100:8080/api/resource/loginEmployee";

    this.getAllLoginEmployee = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getAllLoginEmployee"
        })
    }

    this.getLoginEmployeeByStation = function (physicalStatoion) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getLoginEmployeeByStation/" + physicalStatoion
        })
    }
})