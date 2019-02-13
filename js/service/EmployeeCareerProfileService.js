mainApp.service("EmployeeCareerProfileService", ["$http", function ($http) {

    var BASE_LINK = "http://192.168.254.100:8080/api/resource/career";

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

    this.getAllCareerProfile = function() {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getAllCareerProfile" 
        })

    }
}])