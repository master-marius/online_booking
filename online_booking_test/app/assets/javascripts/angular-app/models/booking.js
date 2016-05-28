 app.factory('BookingModel', Model);

  Model.$inject = [
    'BookingResource'
  ];

  function Model(
    BookingResource
  ) {

    var model = this;

    model = {
      getAll: getAll,
      create: create
    };

    return model;

    function getAll(){
    
      return BookingResource
        .getAll()
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }

    function create(obj){
    
      return BookingResource
        .create(obj)
        .$promise
        .then(
          function(res){
            return res;
          },function(err){
            return err;
          });
    }
  }