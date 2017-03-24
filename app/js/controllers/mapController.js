angular.module('app')
    .controller('MapController', function($scope, ApiService, NgMap, $sce, $rootScope, GeocodingService) {
        $scope.cams = [];
        $scope.neBound = {};
        $scope.swBound = {};

        $scope.updateBounds = function() {
            console.log("Updating bounds");
            NgMap.getMap().then(function(map) {
                let bounds = map.getBounds();
                $scope.neBound = {
                    lat: bounds.f.b.toFixed(3),
                    lng: bounds.b.f.toFixed(3)
                };
                $scope.swBound = {
                    lat: bounds.f.f.toFixed(3),
                    lng: bounds.b.b.toFixed(3)
                };
                $scope.zoom = map.getZoom();

                console.log("Getting new data");
                ApiService.getAllInBox($scope.neBound, $scope.swBound, $scope.zoom).then(function(res) {
                    $scope.cams = res.data.result.webcams;
                }, function(err) {
                    console.log(err);
                });
            }, function(err) {
                console.log(err);
            });
        };

        $scope.updateBounds();

        $scope.gotoRandom = function() {
            ApiService.getRandom().then(function(res) {
                $scope.webcamRandom = res.data.result.webcams[0];
                NgMap.getMap().then(function(map) {
                    map.panTo({lat: $scope.webcamRandom.location.latitude, lng: $scope.webcamRandom.location.longitude});
                    map.setZoom(12);
                    setTimeout($scope.updateBounds, 500);
                });
            });
        };

        $scope.$on('random', function (event, arg) {
           $scope.gotoRandom();
         });

         $scope.$on('goto', function (event, city) {
            console.log('moving to', city);
            GeocodingService.getGeocoding(city).then(function(res) {
                NgMap.getMap().then(function(map) {
                    map.panTo({lat: res.data.results[0].geometry.location.lat, lng: res.data.results[0].geometry.location.lng});
                    map.setZoom(12);
                    setTimeout($scope.updateBounds, 500);
                });
            }, function(err){
                console.log(err);
            });
          });

        $scope.show = false;

        $scope.markerClicked = function(event, cam) {
            console.log('click');
            $scope.show = !$scope.show;
            $scope.currentCamUrl = $sce.trustAsResourceUrl(`//api.lookr.com/embed/timelapse/${cam.id}/day?autoresize=1`);
        };

        $scope.closeModal = function() {
            $scope.show = !$scope.show;
        };

        $scope.mapStyle = [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#212121"
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#212121"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#181818"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#1b1b1b"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#2c2c2c"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#8a8a8a"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#373737"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#3c3c3c"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
                "color": "#4e4e4e"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#3d3d3d"
            }]
        }];
    });
