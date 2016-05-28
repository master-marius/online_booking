
app.controller('TeachersController', Controller);

  Controller.$inject = [
    '$scope', 'TeacherModel', 'ScheduleModel'
  ];

  function Controller(
    $scope, TeacherModel, ScheduleModel
  ) {
    $scope.page = 1;
    $scope.teachers = null;
    $scope.keyword = null;
    search();

    function search(){
      TeacherModel
      .search_all({page: $scope.page, keyword: $scope.keyword})
      .then(function(res) {
        if (res.teachers){
          $scope.teachers = res.teachers;
          $scope.meta = res.meta;
        }
      }, function(err){
        console.log('failed',res);
      });
    }

    $scope.searchKey = function(){

      $scope.page = 1;
      search();
    }

    $scope.showSched = function(teacher){
      ScheduleModel
      .getAll({teacher_id: teacher.id})
      .then(function(res) {
        if(res.schedules){
          teacher.schedules = res.schedules;
        }
      }, function(err){
        console.log('failed',res);
      });
    }

    $scope.opt = function(opt){
      opt = parseInt(opt);

      $scope.page = $scope.page + opt;

      search();
    }

  }