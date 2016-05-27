
  app.factory('MemberResource', Factory);

  Factory.$inject = [
    '$resource'
  ];

  function Factory(
    $resource
  ) {

    var url = '/api/v1/members';
    
    return $resource(url + '/:id', {
      id: '@id',
    }, {
      me: {
        method: 'GET',
        url: url+'/me'
      }
    });

  }