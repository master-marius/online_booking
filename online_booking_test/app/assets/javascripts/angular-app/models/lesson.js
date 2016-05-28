 app.factory('LessonModel', Model);

  Model.$inject = [
    'LessonResource'
  ];

  function Model(
    LessonResource
  ) {

    var model = this;

    model = {
      getAll: getAll
    };

    return model;

    function getAll(){
    
      return LessonResource
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