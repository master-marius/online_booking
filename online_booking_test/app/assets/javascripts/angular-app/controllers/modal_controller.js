
app.controller('ModalController', Controller);

  Controller.$inject = [
    '$scope',
    '$uibModalInstance',
    'data'
  ];

  function Controller(
    $scope,
    $uibModalInstance,
    data
  ) {
    
    $scope.vm = $scope.$parent;
    $scope.title = data.title;

    
  }