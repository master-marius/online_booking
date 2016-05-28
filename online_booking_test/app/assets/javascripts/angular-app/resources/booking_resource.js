
  app.factory('BookingResource', Factory);

  Factory.$inject = [
    '$resource'
  ];

  function Factory(
    $resource
  ) {

    var url = '/api/v1/bookings';
    
    return $resource(url + '/:id', {
      id: '@id',
    }, {
      getAll: {
        method: 'GET'
      },
      create: {
        method: 'POST'
      },
      destroy: {
        method: 'DELETE'
      }
    });

  }