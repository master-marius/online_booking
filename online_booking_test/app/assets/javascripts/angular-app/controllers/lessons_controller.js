
  app.controller('LessonsController', Controller);

  Controller.$inject = [
    '$scope',
    'LessonModel',
    'TeacherModel',
    'BookingModel',
    'ScheduleModel'
  ];

  function Controller(
    $scope,
    LessonModel,
    TeacherModel,
    BookingModel,
    ScheduleModel
  ) {

    $scope.date = '2016-05-28';
    $scope.schedule = null;
    init();

    function init(){
      renderLessons();
      renderTeachers();
      renderBookings();
    }

    $scope.checkSched = function(opt){
      $scope.schedules = null;
      var params = {
        teacher_id: $scope.teacher.id,
        date: $scope.date
      };

      ScheduleModel
      .getAll(params)
      .then(function(res) {
        if (res.schedules){
          $scope.schedules = res.schedules;
          $scope.schedule = null;

          if (opt){
            renderBookings();
          }
        }
      }, function(err){
        console.log('failed',res);
      });
    }

    $scope.checkBooking = function(){
      if ($scope.schedule) {
        $scope.booking = {
          lesson_id: $scope.lesson.id,
          schedule_id: $scope.schedule.id
        }
        BookingModel
        .create({booking: $scope.booking})
        .then(function(res) {
          console.log(res);
        }, function(err){
          console.log('failed',res);
        });
      }
    }

    $scope.selectTime = function(schedule){
      $scope.schedule = schedule;
    }

    function renderBookings(){
      BookingModel
      .getAll({ date: $scope.date})
      .then(function(res) {
        console.log(res);
      }, function(err){
        console.log('failed',res);
      });
    }

    function renderLessons(){
      LessonModel
      .getAll()
      .then(function(res) {
        if (res.lessons){
          $scope.lessons = res.lessons;
          $scope.lesson = res.lessons[0];
        }
      }, function(err){
        console.log('failed',res);
      });
    }

    function renderTeachers(){
      TeacherModel
      .getAll()
      .then(function(res) {
        if (res.teachers){
          $scope.teachers = res.teachers;
          $scope.teacher = res.teachers[0];
          $scope.checkSched();
        }
      }, function(err){
        console.log('failed',res);
      });
    }
  }