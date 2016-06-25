angular.module('App')
.config(function($stateProvider) {
  $stateProvider.state('avatorlist', {
    url: '/places',
    controller: 'AvatorlistController as vm',
    templateUrl: 'views/login/avatorlist.html'
  });
})