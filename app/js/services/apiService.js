const API = 'MZh5I1wwaZmshCtMV1y2RBVpyZMMp1OVME4jsnYuQUchPgUZy0';
var myApp = angular.module('app')
    .service('ApiService', function($http) {
        return {
            getAllInBox: function(neBound, swBound, zoom) {
                return $http.get(`https://webcamstravel.p.mashape.com/webcams/map/${neBound.lat},${neBound.lng},${swBound.lat},${swBound.lng},${zoom}?show=webcams:url,location&mashape-key=${API}&limit=200,1`);
            }
        };
    });
