
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

    $scope.today = function() {
      $scope.date = new Date();
    };

    $scope.today();

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
          if (res.booking){
            renderBookings();
          }
        }, function(err){
          console.log('failed',res);
        });
      }
    }

    $scope.openCalendar = function() {
      $scope.popup1.opened = true;
    };

    $scope.popup1 = {
      opened: false
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];

    $scope.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.selectTime = function(schedule){
      $scope.schedule = schedule;
    }

    function renderBookings(){
      // var date = new Date($scope.date);

      // var yy = date.getFullYear();
      // var mm = date.getMonth();
      
      // $scope.date = Date.new($scope.date);
      // $scope.date = $scope.date.toLocaleFormat('%d-%b-%Y');

      console.log($scope.date);

      BookingModel
      .getAll({ date: $scope.date})
      .then(function(res) {
        if (res.bookings) {
          $scope.bookings = res.bookings;
        }
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