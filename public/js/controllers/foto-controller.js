angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams) {
//angular.module('alurapic').controller('FotoController', function($scope, $resource, $routeParams) {

//    var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
//        'update': {
//            method: 'PUT'
//        }
//    });
    
    $scope.foto = {};
    $scope.mensagem = '';
    
    if($routeParams.fotoId) {
        
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Nao foi possivel obter foto';            
        });        
//        $http.get('/v1/fotos/' + $routeParams.fotoId)
//        .success(function(foto) {
//            $scope.foto = foto;
//        })
//        .error(function(erro) {
//            console.log(erro);
//            $scope.mensagem = 'Nao foi possivel obter foto';
//        });
    }
    
    $scope.submeter = function () {
           
        if ($scope.foto._id) {
            recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
                $scope.mensagem = 'Foto '+ $scope.foto.titulo +' alterada com sucesso';
            }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Nao foi possivel alterar a foto '+ $scope.foto.titul
            });
//            $http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
//            .success( function() {
//                $scope.mensagem = 'Foto '+ $scope.foto.titulo +' alterada com sucesso';
//            })
//            .error( function(erro) {
//                console.log(erro);
//                $scope.mensagem = 'Nao foi possivel alterar a foto '+ $scope.foto.titulo;
//            });
        } else {
            
            recursoFoto.save($scope.foto, function() {
                $scope.foto = {};
                $scope.formulario.$setPristine();
                $scope.mensagem = 'Foto adicionada com sucesso';                
            }, function(erro){
                $scope.mensagem = 'Nao foi possivel cadastrar a foto';
                console.log(erro);   
            });            
//            $http.post('/v1/fotos', $scope.foto)
//            .success(function () {
//                $scope.foto = {};
//                $scope.formulario.$setPristine();
//                $scope.mensagem = 'Foto adicionada com sucesso';
//            })
//            .error(function (erro) {
//                $scope.mensagem = 'Nao foi possivel cadastrar a foto';
//                console.log(erro);   
//            });           
       }
    }
});