
var app = angular.module('app', ['ionic', 'MyController', 'JourneyController', 'SeatsController']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('MainPage', {
            url: "/MainPage",
            templateUrl: "templates/MainPage.html",
            controller: 'MyCtrl'
        })
        .state('tabs', {
            url: "/tab",
            templateUrl: "templates/Tabs.html"
        })
        .state('Seats', {
            url: "/Seats",
            templateUrl: "templates/Seats.html",
            controller: 'SeatsCtrl'
        })
        .state('Journey', {
            url: "/Journey",
            templateUrl: "templates/Journey.html",
            controller: 'JourneyCtrl'
        })
        .state('tabs.HomeTab', {
            url: "/HomeTab",
            views: {
                'HomeTab-tab': {
                    templateUrl: "templates/HomeTab.html",
                    controller: 'MyCtrl'
                }
            }
        })
        .state('tabs.MyProfileTab', {
            url: '/MyProfileTab',
            views: {
                'MyProfileTab-tab': {
                    templateUrl: 'templates/MyProfileTab.html',
                    controller: 'SeatsCtrl'
                }
            }
        })

    $urlRouterProvider.otherwise("/MainPage");

});