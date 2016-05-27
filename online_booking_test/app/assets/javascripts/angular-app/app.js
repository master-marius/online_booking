var app = angular.module
          ('LessonBookingApp',
            ['ngResource', 'ui.router', 'ngAnimate', 'ngSanitize']
          );

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  var url = '/assets/angular-app/templates/';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: url+'home.html',
        controller: 'MainController'
    });

    

});