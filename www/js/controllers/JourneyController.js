
var app = angular.module('JourneyController', []);

app.controller('JourneyCtrl', ['$scope', '$http', '$state', '$stateParams', '$ionicPopup', function($scope, $http, $state, $stateParams, $ionicPopup){

    $scope.journey = {
        "start":"Southampton",
        "destination":"Feltham",
        "time":"05:40",
        "changeCity":"Reading",
        "changeTime" : "06:10",
        "pcOfDisruption" : "7",
        "platform" : "2",
        "arrivalTime" : "9:20"
    };

    $scope.selectSeats = function() {
        $state.go('Seats');
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


