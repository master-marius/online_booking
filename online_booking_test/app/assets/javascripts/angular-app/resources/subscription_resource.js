
  app.factory('SubscriptionResource', Factory);

  Factory.$inject = [
    '$resource'
  ];

  function Factory(
    $resource
  ) {

    var url = '/api/v1/subscriptions';
    
    return $resource(url + '/:id', {
      id: '@id',
    }, {
      getAll: {
        method: 'GET'
      }
    });

  }