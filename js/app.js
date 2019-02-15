var mainApp = angular.module('mainApp', ['ngRoute'])

mainApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        // when('/dashboard', {
        //     templateUrl: '../js/component/dashboard/dashboard.html',
        //     controller: 'DashboardController'
        // }).
        when('/station', {
            templateUrl: '../js/component/station/station.html',
            controller: 'StationController'
        }).
        when('/form', {
            templateUrl: '../js/component/form/form.html',
            controller: 'FormController'
        }).
        when('/profile', {
            templateUrl: '../js/component/profile/profile.html',
            controller: 'ProfileController'
        }).
        when('/login', {
            templateUrl: '../js/component/login/login.html',
            controller: 'LoginController'
        }).
        when('/station-data', {
            templateUrl: '../js/component/station-data/station-data.html',
            controller: 'StationDataController'
        }).
        when('/station-data-central', {
            templateUrl: '../js/component/station-data-central/station-data-central.html',
            controller: 'StationDataCentralController'
        }).
        when('/station-data-logout', {
            templateUrl: '../js/component/station-data-logout/station-data-logout.html',
            controller: 'StationDataLogoutController'
        }).
        when('/station-data-login', {
            templateUrl: '../js/component/station-data-login/station-data-login.html',
            controller: 'StationDataLoginController'
        }).
        when('/developer', {
            templateUrl: '../js/component/developer/developer.html'
        }).
        otherwise({
            redirectTo: '/station'
        });
}]);

var loginApp = angular.module('loginApp', ['ngRoute'])

loginApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/login', {
            templateUrl: '../js/component/login/login.html',
            controller: 'LoginController'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);