
app.controller('ModalController', Controller);

  Controller.$inject = [
    '$scope',
    '$uibModalInstance',
    'data',
    'SubscriptionModel',
    'MemberModel',
    '$state'
  ];

  function Controller(
    $scope,
    $uibModalInstance,
    data,
    SubscriptionModel,
    MemberModel,
    $state
  ) {
    
    $scope.sub = null;
    $scope.title = data.title;

    getAll();

    function getAll(){
      SubscriptionModel
      .getAll()
      .then(function(res) {
        if (res.subscriptions){
          $scope.subs = res.subscriptions;
        }
      }, function(err){
        console.log('failed',res);
      });
    }

    $scope.setSub = function(){
      if($scope.sub){
        var params = {
          id : data.me.id,
          member: {
            subscription_id : $scope.sub.id,
            has_completed_first_login: true
          }
        }
        MemberModel
        .update(params)
        .then(function(res){
          if (res.member){
            if (res.member.has_completed_first_login){
              closeModal();
              $state.go('home.lessons');
            }
          }
        });
      }else{
        console.log('No plan selected.');
      }
    }

    function closeModal(){
      $uibModalInstance.close();
    }

  }