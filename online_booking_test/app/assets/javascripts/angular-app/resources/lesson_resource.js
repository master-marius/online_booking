
  app.factory('LessonResource', Factory);

  Factory.$inject = [
    '$resource'
  ];

  function Factory(
    $resource
  ) {

    var url = '/api/v1/lessons';
    
    return $resource(url + '/:id', {
      id: '@id',
    }, {
      getAll: {
        method: 'GET'
      }
    });

  }