
  app.controller('MainController', Controller);

  Controller.$inject = [
    '$scope',
    'MemberModel'
  ];

  function Controller(
    $scope,
    MemberModel
  ) {
    
    me();

    function me(){
      MemberModel
      .me()
      .then(function(res) {
        console.log(res);
      }, function(err){
        console.log('failed',res);
      });
    }
  }