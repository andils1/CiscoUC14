var airlines = [{"fs":"LCI","iata":"LF","icao":"LCI","name":"Lao Central Airlines ","active":true},{"fs":"TGU","iata":"5U","icao":"TGU","name":"TAG","active":true},{"fs":"BT","iata":"BT","icao":"BTI","name":"Air Baltic","active":true},{"fs":"9J","iata":"9J","icao":"DAN","name":"Dana Airlines","active":true},{"fs":"2O","iata":"2O","icao":"RNE","name":"Island Air Service","active":true},{"fs":"NPT","icao":"NPT","name":"Atlantic Airlines","active":true},{"fs":"C8","iata":"C8","icao":"ICV","name":"Cargolux Italia","active":true},{"fs":"FK","iata":"FK","icao":"WTA","name":"Africa West","active":true},{"fs":"8K","iata":"8K","icao":"EVS","name":"EVAS Air Charters","active":true},{"fs":"W8","iata":"W8","icao":"CJT","name":"Cargojet","active":true},{"fs":"JBW","iata":"3J","icao":"JBW","name":"Jubba Airways (Kenya)","active":true},{"fs":"TNU","iata":"M8","icao":"TNU","name":"TransNusa","active":true},{"fs":"HCC","iata":"HC","icao":"HCC","name":"Holidays Czech Airlines","active":true},{"fs":"APJ","iata":"MM","icao":"APJ","name":"Peach Aviation","active":true},{"fs":"TUY","iata":"L4","icao":"TUY","name":"LTA","active":true},{"fs":"LAE","iata":"L7","icao":"LAE","name":"LANCO","active":true},{"fs":"L5*","iata":"L5","icao":"LTR","name":"Lufttransport","active":true},{"fs":"QA","iata":"QA","icao":"CIM","name":"Cimber","active":true},{"fs":"KBZ","iata":"K7","icao":"KBZ","name":"Air KBZ","active":true},{"fs":"L2","iata":"L2","icao":"LYC","name":"Lynden Air Cargo","active":true},{"fs":"MPK","iata":"I6","icao":"MPK","name":"Air Indus","active":true},{"fs":"CAO","icao":"CAO","name":"Air China Cargo ","active":true},{"fs":"BEK","iata":"Z9","icao":"BEK","name":"Bek Air","active":true},{"fs":"IAE","iata":"IO","icao":"IAE","name":"IrAero","active":true},{"fs":"GL*","iata":"GL","name":"Airglow Aviation Services","active":true},{"fs":"ATN","iata":"8C","icao":"ATN","name":"ATI","active":true},{"fs":"GU","iata":"GU","icao":"GUG","name":"Aviateca Guatemala","active":true},{"fs":"GHY","icao":"GHY","name":"German Sky Airlines ","active":true},{"fs":"SS","iata":"SS","icao":"CRL","name":"Corsair","active":true},{"fs":"XK","iata":"XK","icao":"CCM","name":"Air Corsica","active":true},{"fs":"W9*","iata":"W9","icao":"JAB","name":"Air Bagan","active":true},{"fs":"Z8*","iata":"Z8","icao":"AZN","name":"Amaszonas","active":true},{"fs":"D2","iata":"D2","icao":"SSF","name":"Severstal Aircompany","active":true},{"fs":"SNC","iata":"2Q","icao":"SNC","name":"Air Cargo Carriers","active":true},{"fs":"PST","iata":"7P","icao":"PST","name":"Air Panama","active":true},{"fs":"VV","iata":"VV","icao":"AEW","name":"Aerosvit Airlines","active":true},{"fs":"UJ","iata":"UJ","icao":"LMU","name":"AlMasria","active":true},{"fs":"9U","iata":"9U","icao":"MLD","name":"Air Moldova","active":true},{"fs":"NF","iata":"NF","icao":"AVN","name":"Air Vanuatu","phoneNumber":"678 238 48","active":true},{"fs":"NJS","iata":"NC","icao":"NJS","name":"Cobham Aviation","active":true}];

airlines = airlines.sort(function(a, b) {

    var airlineA = a.name.toLowerCase();
    var airlineB = b.name.toLowerCase();

    if(airlineA > airlineB) return 1;
    if(airlineA < airlineB) return -1;
    return 0;
});

var app = angular.module('CitiesFactory', []);

    app.factory('CitiesService', function($q, $timeout) {

        var searchCities = function(searchFilter) {

            var deferred = $q.defer();

            var matches = airlines.filter( function(airline) {
                if(airline.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
            })

            $timeout( function(){

                deferred.resolve( matches );

            }, 100);

            return deferred.promise;

        };

        return {

            searchCities : searchCities

        }
    })