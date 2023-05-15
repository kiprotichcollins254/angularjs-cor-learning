(()=>{
  'use strict'
  const Module2AppFunc = ($scope,$filter,PriceCalFilter) => {
    $scope.name = 'kipbz'
    $scope.letterchange = 'Upper'
    $scope.isupper = false
    $scope.price = .45

    $scope.changeName = ()=>{
      if($scope.isupper){
        $scope.name =   $filter('lowercase')($scope.name)
        $scope.isupper = false
        $scope.letterchange = 'Upper'
        $scope.price = PriceCalFilter($scope.price,$scope.isupper)
      }else{
        $scope.name =   $filter('uppercase')($scope.name)
        $scope.isupper = true
        $scope.letterchange = 'Lower'
        $scope.price = PriceCalFilter($scope.price,$scope.isupper)
      }

      // return $scope.name
    }
  }

  ///creating a custom Filters
const  PriceCalFilter = () =>{
    return  (input,lcase) =>{
      input  = input || 0;
      if (lcase){
        input = input / 100;
      }else{
        input = input * 100;
      }

      return input
    }
  }

  angular.module('Module2App',[]).controller('Module2AppController',Module2AppFunc).filter('PriceCal',PriceCalFilter);
  Module2AppFunc.$inject = ['$scope','$filter','PriceCalFilter']

})();
