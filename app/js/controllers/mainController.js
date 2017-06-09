angular.module('app')
    .controller('MainController', function($scope, CurrentUser, UserService) {
        UserService.getAll().then(function(res) {
          $scope.users = res.data;
          console.log('res.data', res.data);
        });
    });
