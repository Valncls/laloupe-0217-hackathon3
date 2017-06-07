angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth) {
      $scope.user = {
        sitefav:[]
      }

        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $state.go('anon.home');
            });

            console.log($scope.user, $scope.user.sitefav);
        };
    });
