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
});

