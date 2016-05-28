
  app.controller('LessonsController', Controller);

  Controller.$inject = [
    '$scope',
    'LessonModel',
    'TeacherModel'
  ];

  function Controller(
    $scope,
    LessonModel,
    TeacherModel
  ) {

    $scope.date = '2016-05-28';
    init();

    function init(){
      renderLessons();
      renderTeachers();
      
    }

    function renderLessons(){
      LessonModel
      .getAll()
      .then(function(res) {
        if (res.lessons){
          $scope.lessons = res.lessons;
        }
        console.log(res);
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
        }
        console.log(res);
      }, function(err){
        console.log('failed',res);
      });
    }
  }