const API_GEOCODING = 'AIzaSyADE1KdZQq-dtbTybC4FE8tl0Ab9OKhE2k';
var myApp = angular.module('app')
    .service('GeocodingService', function($http) {
        return {
            getGeocoding: function(address) {
                return $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_GEOCODING}`);
            }
        };
    });
