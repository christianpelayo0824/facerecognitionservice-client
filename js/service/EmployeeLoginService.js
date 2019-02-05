mainApp.service("EmployeeLoginService", function ($http) {

    var BASE_LINK = "http://10.42.0.1:8080/api/resource/loginEmployee";

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