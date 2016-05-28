 app.factory('ScheduleModel', Model);

  Model.$inject = [
    'ScheduleResource'
  ];

  function Model(
    ScheduleResource
  ) {

    var model = this;

    model = {
      getAll: getAll
    };

    return model;

    function getAll(obj){
    
      return ScheduleResource
        .getAll(obj)
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }
  }