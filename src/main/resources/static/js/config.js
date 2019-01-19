'use strict'

angular.module('testApp' , ["ngRoute"])
    .config(function($routeProvider){

        $routeProvider
            /*.when('/' , {
                templateUrl : "views/main.html",
                controller : 'MainController',
                controllerAs : 'main'
            })*/
            .when('/person' , {
                templateUrl : "views/person.html",
                controller : 'PersonController',
                controllerAs : 'person'
            })
            .when('/persons' , {
                templateUrl : "views/persons.html",
                controller : 'PersonController',
                controllerAs : 'person'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
