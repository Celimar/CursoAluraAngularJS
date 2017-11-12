angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
        titulo: '@'    
    };
    
    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel.html'; 
//    ddo.template = 
//          '<div class="panel panel-default">'
//        + '    <div class="panel panel-heading">'
//        + '        <h3 class="panel-title">{{titulo}}</h3>'
//        + '    </div>'
//        + '    <div class="panel-body" ng-transclude>'
//        + '    </div>'
//        + '</div>';
    
    return ddo;
})
.directive('minhaFoto', function() {
    var ddo = {};
    
    ddo.restrict = "AE";
    
    ddo.scope = {
        titulo: '@',    
        url: '@'    
    };
    
    ddo.transclude = true;
    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">'; 
    
    return ddo;
    
})
.directive('meuBotaoPerigo', function() {
    var ddo = {};
    ddo.restrict ="E";
    ddo.scope = {
        nome: '@',
        acao: '&'
    }
    ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>';
    return ddo;
});

