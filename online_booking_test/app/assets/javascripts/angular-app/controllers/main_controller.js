
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
        if(res.member){
          if (res.member.has_completed_first_login){

          }else{
            alert('Please choose subscription');
          }
        }
      }, function(err){
        console.log('failed',res);
      });
    }
  }