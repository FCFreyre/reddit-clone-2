(function() {
  angular.module('reddit')
    .controller('AddPostController', ShowPostsController)

    function ShowPostsController($http, $state, moment) {
      const vm = this
      console.log('add controller is working');

      vm.addPost = function() {
        $http.post('/api/posts', vm.newPost)
        .then(res => {
          console.log(res);
          $state.go('list')
        })
      }
    }
})()
