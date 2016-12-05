angular.module('renaBankaPortfolio')
    .controller('AboutCtrl', function($scope, $http, $location) {

        $scope.changetoRoute = function() {
            $location.path('/projects');
        }


    });

