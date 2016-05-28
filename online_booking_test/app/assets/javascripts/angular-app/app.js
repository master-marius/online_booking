var app = angular.module
          ('LessonBookingApp',
            ['ngResource', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']
          );

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  var url = '/assets/angular-app/templates/';
  $urlRouterProvider.otherwise('/dashboard');
  $stateProvider
    .state('home', {
        url: '/dashboard',
        templateUrl: url+'home.html',
        controller: 'MainController'
    })
    .state('home.lessons', {
        url: '/lessons',
        templateUrl: url+'lessons.html',
        controller: 'LessonsController'
    })
    .state('teachers', {
        url: '/teachers',
        templateUrl: url+'teachers.html',
        controller: 'TeachersController'
    });

    

});