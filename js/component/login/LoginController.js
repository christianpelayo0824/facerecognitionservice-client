loginApp.controller('LoginController', function ($scope, $location, $window) {

    particlesJS.load('particles-js', '../js/particle.json', function () {
        console.log('particles.js loaded - callback');
    });

    $scope.loginButton = function () {
        console.log("HIT");
        $window.location.href = "template/main.html";
    }
});