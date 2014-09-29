angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, $timeout, $http, Tags) {
  var sliceIndex = 20, tags = [];
  $scope.tags = [];
  $scope.noMoreTags = false;

  $scope.loadMore = function() {
    console.log("infinitescroll");
    if(tags.length == 0) {
      tags = Tags.all();
      $scope.tags = tags.slice(0,20);
      console.log("Tags loaded", tags);
    } else {
      if(tags[$scope.tags.length]) {
        $scope.tags = $scope.tags.concat(tags.slice($scope.tags.length, $scope.tags.length + 20));
        console.log("Scrolled");
      }
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
