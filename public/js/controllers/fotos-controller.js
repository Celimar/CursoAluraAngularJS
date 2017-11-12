angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
//angular.module('alurapic').controller('FotosController', function($scope, $http, $resource){
    
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    
//    var recursoFoto = $resource('/v1/fotos/:fotoId');
    
    recursoFoto.query( function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro)   
    });
        
//    $http.get('v1/fotos')
//        .success( function(fotos) {
//            $scope.fotos = fotos;
//    })
//    .error( function(error) {
//        console.log(error);    
//    });
    
    $scope.remover = function (foto) {
        
        recursoFoto.delete({fotoId: foto._id}, function() {
            var index = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(index, 1);
            $scope.mensagem = 'Foto '+ foto.titulo +' foi removida com sucesso.'; 
        
        }, function(erro) {
            console.log(erro);   
            $scope.mensagem = 'Nao foi possivel remover a foro '+ foto.titulo +'.';   
        });
        
//        console.log(foto);
//        $http.delete('v1/fotos/'+foto._id)
//        .success(function() {
//            var index = $scope.fotos.indexOf(foto);
//            $scope.fotos.splice(index, 1);
//            $scope.mensagem = 'Foto '+ foto.titulo +' foi removida com sucesso.'; 
//        })
//        .error(function(erro) {
//            console.log(erro);   
//            $scope.mensagem = 'Nao foi possivel remover a foro '+ foto.titulo +'.';   
//        });
    };
});