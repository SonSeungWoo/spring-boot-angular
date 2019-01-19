'use strict'

/*angular.module('testApp')
    .controller('MainController' , ['$scope' , function($scope){
        $scope.start = function() {
            alert('Scope Start Function');
        }
    }]);*/

angular.module('testApp', [])

    .controller('MainController', function($scope) {
        $scope.start = function() {
            alert('Scope Start Function');
        }
    });
function Scope() {
    var scope = angular.element(document.getElementById("Container")).scope();

    return scope;
}