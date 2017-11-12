angular.module('alurapic')
    .controller('FotoController', function($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';
    
    if($routeParams.fotoId) {
        $http.get('/v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Nao foi possivel obter foto';
        });
    }
    
    $scope.submeter = function () {
           
        if ($scope.foto._id) {
            $http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
            .success( function() {
                $scope.mensagem = 'Foto '+ $scope.foto.titulo +' alterada com sucesso';
            })
            .error( function(erro) {
                console.log(erro);
                $scope.mensagem = 'Nao foi possivel alterar a foto '+ $scope.foto.titulo;
            });
        } else {
            $http.post('/v1/fotos', $scope.foto)
            .success(function () {
                $scope.foto = {};
                $scope.mensagem = 'Foto adicionada com sucesso';
            })
            .error(function (erro) {
                $scope.mensagem = 'Nao foi possivel cadastrar a foto';
                console.log(erro);   
            });           
       }
    }
    
    $scope.remover = function (foto) {
        console.log(foto);
    }
    
});