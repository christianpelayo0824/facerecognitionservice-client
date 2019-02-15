mainApp.service("ReasonService", function ($http) {

    var BASE_LINK = "http://localhost:8080/api/resource/reason";

    this.getReasonStatusById = function (id) {
        return $http({
            method: "GET",
            url: BASE_LINK + "/getReasonStatusById/" + id
        })
    }
})