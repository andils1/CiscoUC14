
var app = angular.module('SeatsController', []);

app.controller('SeatsCtrl', ['$scope', '$http', '$state', '$stateParams', '$ionicPopup', function($scope, $http, $state, $stateParams, $ionicPopup){

    $scope.rows = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    $scope.carrieges = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    $scope.reserve = function(element) {
        var alertPopup = $ionicPopup.confirm({
            title: 'Booking',
            template: 'Would you like to reserve that seat?'
        });
        alertPopup.then(function(res) {
            if(res) {
                alertPopup = $ionicPopup.alert({
                    title: 'Booked',
                    template: 'Seat booked!'
                });
                var button = element.toElement;
                angular.element(button).addClass("green");
            } else {
                //console.log('You are not sure');
            }
        });
    }

}]);


