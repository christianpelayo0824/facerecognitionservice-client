var mainApp = angular.module('mainApp', ['ngRoute'])

mainApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/dashboard', {
            templateUrl: '../js/component/dashboard/dashboard.html',
            controller: 'DashboardController'
        }).
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
        otherwise({
            redirectTo: '/dashboard'
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