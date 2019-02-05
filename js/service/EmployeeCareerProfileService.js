mainApp.service("EmployeeCareerProfileService", ["$http", function ($http) {

    var BASE_LINK = "http://10.42.0.1:8080/api/resource/career";

    this.getDistinctStation = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getDistinctStation"
        })
    }

    this.getCareerProfileByStation = function (station) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getCareerProfileByStation/" + station
        })
    }
}])