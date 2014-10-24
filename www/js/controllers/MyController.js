
var app = angular.module('MyController', []);

app.controller('MyCtrl', ['$scope', '$http', '$state', '$ionicPopup', function($scope, $http, $state, $ionicPopup){

    var requestUrl =  'jsons/Journeys.json';

    $scope.journeys = "";

    $scope.title="Journeys";

    $scope.hours = ['07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];

    $http.get(requestUrl).success (function(data){
        $scope.journeys = data;
    });

    $scope.goToSecond = function() {
        $state.go('tabs.HomeTab');
    }

    $scope.checkSeats = function() {
        $state.go('Seats');
    }

   $scope.doSomething = function() {
        $state.go('Journey');
    }

    $scope.showFeedback = function() {
        var alertPopup = $ionicPopup.alert({
            title: '<strong class="timeSize2">Feedback</strong>',
            template: '<ul><li>Easiness of finding free seat: 66%</l1><br> ' +
                '<li>Reasonably notified delays: 60% </li>' +
                '<li>Happy with catering: 84%</li>' +
                '<li><strong class="overallFeedback centerText">Overall satisfaction: 72%</strong></li></ul>'

        });
    }

}]);


