 app.factory('MemberModel', Model);

  Model.$inject = [
    'MemberResource'
  ];

  function Model(
    MemberResource
  ) {

    var model = this;

    model = {
      me: me
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
  }