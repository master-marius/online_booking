 app.factory('SubscriptionModel', Model);

  Model.$inject = [
    'SubscriptionResource'
  ];

  function Model(
    SubscriptionResource
  ) {

    var model = this;

    model = {
      getAll: getAll
    };

    return model;

    function getAll(){
    
      return SubscriptionResource
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