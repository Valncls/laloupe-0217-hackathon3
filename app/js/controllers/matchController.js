angular.module('app')
    .controller('MatchController', function($scope, UserService, CurrentUser) {
      $scope.currentUser = CurrentUser.user();
      console.log($scope.currentUser);
      UserService.getAllMatch({sites: $scope.currentUser.sitefav, lookup: $scope.currentUser.lookup}).then(function(res) {
          console.log(res.data);
          $scope.users = res.data;
        });
    });
