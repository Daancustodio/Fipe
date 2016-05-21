angular.module('app', [])
  .controller('FipeController', function($scope,$http) {
        
        $scope.marcas = [];

        $http.get("http://fipeapi.appspot.com/api/1/carros/marcas.json").success(function(data){
          $scope.marcas = data;
          
        }).error(function(error){
          alert(error)
          console.log(error)
        });

        $scope.bucaVeiculos = function(marca){
          var rota = "http://fipeapi.appspot.com/api/1/carros/veiculos/" + marca.id + ".json"
          $scope.marcaSelecionada = marca;
          $http.get(rota).success(function(data){
              $scope.veiculos = data;              
            }).error(function(error){
          alert(error)
          
        })};

        $scope.bucaCarros = function(veiculo, marca){
          var rota = "http://fipeapi.appspot.com/api/1/carros/veiculo/" + marca.id + "/"+ veiculo.id + ".json"
          $scope.carroSelecionada = carro;
          $http.get(rota).success(function(data){
              $scope.carros = data;              
            }).error(function(error){
              alert(error);          
            })
        }

    

  });