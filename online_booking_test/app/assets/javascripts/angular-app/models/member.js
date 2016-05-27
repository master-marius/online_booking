 app.factory('MemberModel', Model);

  Model.$inject = [
    'MemberResource'
  ];

  function Model(
    MemberResource
  ) {

    var model = this;

    model = {
      me: me,
      update: update
    };

    return model;

    function me(){
    
      return MemberResource
        .me()
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }

    function update(obj){
    
      return MemberResource
        .update(obj)
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }
  }