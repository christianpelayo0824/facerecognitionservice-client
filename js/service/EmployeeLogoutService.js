mainApp.service("EmployeeLogoutService", function ($http) {

    var BASE_LINK = "http://localhost:8080/api/resource/logoutEmployee";

    this.getAllLogoutEmployee = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getAllLogoutEmployee"
        })
    }

    this.countAllLogoutEmployeeByStation = function (station) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/countAllLogoutEmployeeByStation/" + station
        })
    }
})