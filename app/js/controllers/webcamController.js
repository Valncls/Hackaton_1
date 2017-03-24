angular.module('app')
    .controller('webcamController', function($scope, dataService, $uibModal) {
        dataService.getAll().then(function(res) {
            $scope.webcam = res.data;
});
dataService.getRandom().then(function(res) {
    $scope.webcamRandom = res.data;
        });
        $scope.show = false;
    
});
