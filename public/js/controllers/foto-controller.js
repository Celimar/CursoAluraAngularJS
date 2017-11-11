angular.module('alurapic').controller('FotoController', function($scope, $http){

    $scope.foto = {};
    $scope.mensagem = '';
    
    $scope.submeter = function() {
        
        $http.post('/v1/fotos', $scope.foto)
        .success(function(){
            $scope.mensagem = 'Foto adicionada com sucesso';
        })
        .error(function(erro) {
            console.log(erro);   
            $scope.mensagem = 'Nao foi possivel cadastrar a foto';
        })
    };
    
});