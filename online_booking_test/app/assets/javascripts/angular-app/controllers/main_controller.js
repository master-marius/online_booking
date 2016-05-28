
  app.controller('MainController', Controller);

  Controller.$inject = [
    '$scope',
    'MemberModel',
    '$uibModal',
    '$state'
  ];

  function Controller(
    $scope,
    MemberModel,
    $uibModal,
    $state
  ) {

    me();

    function me(){
      MemberModel
      .me()
      .then(function(res) {
        if(res.member){
          $scope.current_member = res.member;
          if (res.member.has_completed_first_login){
            $state.go('home.lessons');
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
                     title: 'Subscribe to lessons',
                     me: $scope.current_member
                   };
          }
        }
      });
    }
  }