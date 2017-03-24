const API = 'MZh5I1wwaZmshCtMV1y2RBVpyZMMp1OVME4jsnYuQUchPgUZy0';
var myApp = angular.module('app')
    .service('ApiService', function($http) {
        return {
            getAllInBox: function(neBound, swBound) {
                return $http.get(`https://webcamstravel.p.mashape.com/webcams/list/bbox=${neBound.lat},${neBound.lng},${swBound.lat},${swBound.lng}?show=webcams:url,location&mashape-key=${API}&limit=200,1`);
            }
        };
    });
