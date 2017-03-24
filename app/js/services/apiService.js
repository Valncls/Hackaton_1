const API = 'MZh5I1wwaZmshCtMV1y2RBVpyZMMp1OVME4jsnYuQUchPgUZy0';
var myApp = angular.module('app')
    .service('ApiService', function($http) {
        return {
            getRandom: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/orderby=random?show=webcams:url&mashape-key=' + API);
            },
            getAllInBox: function(neBound, swBound, zoom) {
                return $http.get(`https://webcamstravel.p.mashape.com/webcams/map/${neBound.lat},${neBound.lng},${swBound.lat},${swBound.lng},10?show=webcams:url,location&mashape-key=${API}&limit=200,1`);
                //return $http.get('https://webcamstravel.p.mashape.com/webcams/map/45.900,6.117,40.500,3.624,10?show=webcams:url,location&mashape-key=MZh5I1wwaZmshCtMV1y2RBVpyZMMp1OVME4jsnYuQUchPgUZy0')
            }
        };
    });
