
  app.controller('MainController', Controller);

  Controller.$inject = [
    '$scope',
    'MemberModel',
    '$uibModal'
  ];

  function Controller(
    $scope,
    MemberModel,
    $uibModal
  ) {

    me();

    function me(){
      MemberModel
      .me()
      .then(function(res) {
        if(res.member){
          if (res.member.has_completed_first_login){

          }else{
            showSubscriptions();
          }
        }
      }, function(err){
        console.log('failed',res);
      });
    }

    function showSubscriptions(){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/assets/angular-app/templates/modal.html',
        controller: 'ModalController',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          data: function () {
            return { type: 'subscribe',
                     title: 'Subscribe to lessons'
                   };
          }
        }
      });
    }
  }