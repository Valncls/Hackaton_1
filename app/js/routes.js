angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navigation@': {
                        templateUrl: 'anon/navigation.html',
                        controller: 'NavigationController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.map', {
                url: '/map',
                views: {
                    'content@': {
                        templateUrl: 'anon/map.html',
                        controller: 'MapController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
