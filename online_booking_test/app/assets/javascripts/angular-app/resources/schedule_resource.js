
  app.factory('ScheduleResource', Factory);

  Factory.$inject = [
    '$resource'
  ];

  function Factory(
    $resource
  ) {

    var url = '/api/v1/schedules';
    
    return $resource(url + '/:id', {
      id: '@id',
    }, {
      getAll: {
        method: 'GET'
      }
    });

  }