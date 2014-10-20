"use strict";

!(function() {
    var app = angular.module('eac-app', ['ngRoute']);

    app.config(function( $routeProvider, $locationProvider ) {
        $routeProvider.when('/page1', {
            templateUrl: 'fragments/page1.html'
        });

        $routeProvider.when('/page2', {
            templateUrl: 'fragments/page2.html'
        });
        $routeProvider.when('/page3', {
            templateUrl: 'fragments/page3.html'
        });
        $routeProvider.when('/page4', {
            templateUrl: 'fragments/page4.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/page1'
        });
    });

    app.controller('NavCtrl', function( $scope, $location ) {
        $scope.isActive = function( path ) {
            return path == $location.path();
        }
    });
})();