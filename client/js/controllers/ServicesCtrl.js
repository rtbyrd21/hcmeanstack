

app.controller('servicesController', ['$scope', '$resource', function ($scope, $resource) { 
  var Hc = $resource('/api/hc');
  
  Hc.query(function(results){
    $scope.services = results;
  });
  
  $scope.services = []
  
  $scope.createService = function() {
      var service = new Hc();
      service.name = $scope.serviceName;
      service.$save(function(result){
        $scope.services.push(result);
        $scope.serviceName = '';
      });
    }
}]);

