 app.factory('TeacherModel', Model);

  Model.$inject = [
    'TeacherResource'
  ];

  function Model(
    TeacherResource
  ) {

    var model = this;

    model = {
      getAll: getAll,
      search_all: search_all
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

    function search_all(obj){
  
      return TeacherResource
        .search_all(obj)
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }
  }