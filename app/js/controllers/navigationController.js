angular.module('app')
    .controller('NavigationController', function($scope, Auth, CurrentUser, $rootScope) {
        $scope.checked = false;
        $scope.size = '100px';
        $scope.toggle = function() {
            $scope.checked = !$scope.checked;
        };
        $scope.mockRouteChange = function() {
            $scope.$broadcast('$locationChangeStart');
        };
        $scope.onopen = function() {
            alert('Open');
            console.log(this, $scope);
        };
        $scope.onclose = function() {
            alert('Close');
            console.log($scope);
        };

        $scope.random = function() {
            $rootScope.$broadcast('random', 'message');
        };

        $scope.search = function() {
            console.log($scope.inputSearch);
            $rootScope.$broadcast('goto', $scope.inputSearch);
        };
        $scope.inputSearch = '';
    });
