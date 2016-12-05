angular.module('renaBankaPortfolio', [ 'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        });

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'ngViews/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'ngViews/contact.html',
                controller: 'ContactCtrl'

            })

            .when('/projects', {
                templateUrl: 'ngViews/projects.html',
                controller: 'ProjectsCtrl'

            })

            .when('/process', {
                templateUrl: 'ngViews/process.html',
                controller: 'ProcessCtrl'

            })
            .when('/design', {
                templateUrl: 'ngViews/design.html',
                controller: 'DesignCtrl'

            });


        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);