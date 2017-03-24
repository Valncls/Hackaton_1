var API = 'MZh5I1wwaZmshCtMV1y2RBVpyZMMp1OVME4jsnYuQUchPgUZy0';
var myApp = angular.module('app')
    .service('dataService', function($http) {
        return {
            getAll: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/bbox=45.900,6.117,40.500,3.624?show=webcams:url&mashape-key=' + API);
            },
            getRandom: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/orderby=random?show=webcams:url&mashape-key=' + API);
            }
        };

    });
