angular.module('app')
    .controller('webcamController', function($scope, dataService, $uibModal) {
        dataService.getAll().then(function(res) {
            $scope.webcam = res.data;
});


});
