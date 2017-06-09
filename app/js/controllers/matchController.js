angular.module('app')
    .controller('MatchController', function($scope, UserService, CurrentUser) {
      $scope.currentUser = CurrentUser.user();
      console.log($scope.currentUser);
      UserService.getAllMatch({sites: $scope.currentUser.sitefav, lookup: $scope.currentUser.lookup}).then(function(res) {
          console.log(res.data);
          $scope.users = res.data;
          $scope.users[0].primary = true;
          $scope.selectUser = function(index) {
            $scope.users[index].primary = false;
            if(index < $scope.users.length) {
              $scope.users[index + 1].primary = true;
            } else {
              // dernier
            }
          };
        });
    });
