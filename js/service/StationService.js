mainApp.service("StationService", ["$http", function ($http) {

    var BASE_LINK = "http://localhost:8080/api/resource/career";

    this.getDistinctStation = function () {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getDistinctStation"
        })
    }
}])