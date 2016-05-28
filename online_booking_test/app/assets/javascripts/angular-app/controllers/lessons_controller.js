
  app.controller('LessonsController', Controller);

  Controller.$inject = [
    '$scope',
    'LessonModel',
    'TeacherModel',
    'ScheduleModel'
  ];

  function Controller(
    $scope,
    LessonModel,
    TeacherModel,
    ScheduleModel
  ) {

    $scope.date = '2016-05-28';
    init();

    function init(){
      renderLessons();
      renderTeachers();
      
    }

    $scope.checkSched = function(){
      var params = {
        teacher_id: $scope.teacher.id,
        date: $scope.date
      };

      ScheduleModel
      .getAll(params)
      .then(function(res) {
        if (res.schedules){
          $scope.schedules = res.schedules;
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