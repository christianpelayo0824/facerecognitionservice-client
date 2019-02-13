mainApp.service("ReasonService", function ($http) {

    var BASE_LINK = "http://192.168.254.100:8080/api/resource/reason";

    this.getReasonStatusById = function (id) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getReasonStatusById/" + id
        })
    }
})