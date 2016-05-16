
//
var mainCtrlFn = function($scope){
   $scope.brandName='CGI';
    $scope.loadContent=function(contentTye){
      if(contentTye=='login')
        {
         $scope.contentTemplate='app/login/login.tpl.html';
            
        }
        if(contentTye=='register'){
            
           $scope.contentTemplate='app/register/register.tpl.html'; 
        }
    };
};
angular.module('vehicleDealers')
.controller('mainCtrl',['$scope',mainCtrlFn])