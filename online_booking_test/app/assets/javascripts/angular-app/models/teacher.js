 app.factory('TeacherModel', Model);

  Model.$inject = [
    'TeacherResource'
  ];

  function Model(
    TeacherResource
  ) {

    var model = this;

    model = {
      getAll: getAll
    };

    return model;

    function getAll(){
    
      return TeacherResource
        .getAll()
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }
  }