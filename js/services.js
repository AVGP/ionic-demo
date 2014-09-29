angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Tags', function($http) {

  var tags = [];
  $http({url: "http://www.gifbase.com/js/tags.json"}).success(function(response) {
    console.log(response);
    try {
      tags = response
    } catch(e) {
      alert("Error fetching tags: " + e);
      // Do nothing else
    }
  })

  var currentBatchIndex = 0;

  return {
    all: function() {
//      if(currentBatchIndex >= tags.length - 1) return;
      return tags;//.slice(currentBatchIndex, 20);
    }
  }
});
