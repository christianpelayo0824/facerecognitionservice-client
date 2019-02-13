mainApp.service("EmployeeLogoutService", function ($http) {

    var BASE_LINK = "http://192.168.254.100:8080/api/resource/logoutEmployee";

    this.getAllLogoutEmployee = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getAllLogoutEmployee"
        })
    }
})