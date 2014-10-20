"use strict";

!(function() {
    var app = angular.module('portal-app', ['ngRoute']);

    app.config(function( $routeProvider, $locationProvider ) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'fragments/dashboard.html'
        });
        $routeProvider.when('/antenatalcare', {
            templateUrl: 'fragments/antenatalcare.html'
        });
        $routeProvider.when('/delivery', {
            templateUrl: 'fragments/delivery.html'
        });
        $routeProvider.when('/familyplanning', {
            templateUrl: 'fragments/familyplanning.html'
        });
        $routeProvider.when('/immunization', {
            templateUrl: 'fragments/immunization.html'
        });
        $routeProvider.when('/hivaids', {
            templateUrl: 'fragments/hivaids.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    });

    app.controller('NavCtrl', function( $scope, $location ) {
        $scope.isActive = function( path ) {
            return path == $location.path();
        }
    });
})();