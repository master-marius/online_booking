
  app.factory('TeacherResource', Factory);

  Factory.$inject = [
    '$resource'
  ];

  function Factory(
    $resource
  ) {

    var url = '/api/v1/teachers';
    
    return $resource(url + '/:id', {
      id: '@id',
    }, {
      getAll: {
        method: 'GET'
      }
    });

  }