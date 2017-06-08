angular.module('app')
    .controller('MatchController', function($scope, UserService) {
      UserService.getAll().then(function(res) {
          $scope.users = res.data;
          console.log($scope.users);
      });
    });
