angular.module('app')
    .controller('MatchController', function($scope, UserService, CurrentUser) {
      $scope.currentUser = CurrentUser.user();
      UserService.getAll().then(function(res) {
          $scope.users = res.data;
          console.log($scope.users);
      });
    });
