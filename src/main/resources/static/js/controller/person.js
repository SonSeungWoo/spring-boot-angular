'use strict'
angular.module('testApp')
    .controller('PersonController' , ['$scope' , function($scope, $http){
        _refreshEmployeeData();
        function _refreshEmployeeData() {
            $http({
                method: 'GET',
                url: '/person'
            }).then(
                function(res) { // success
                    $scope.person = res.data;
                },
                function(res) { // error
                    console.log("Error: " + res.status + " : " + res.data);
                }
            );
        }
    }]);