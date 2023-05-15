(()=>{
'use strict'
const CounterAppController = ($scope,$timeout) =>{
  $scope.counter = 0;
  $scope.Increment = () =>{
    $timeout(()=>{
         $scope.counter++
         console.log('counter incremented')
    },2000)

  }


  // $scope.Increment = () =>{
  //   setTimeout(()=>{
  //     $scope.$apply(()=>{
  //        $scope.counter++
  //     })
  //   },2000)
  //
  // }

  // $scope.Increment = () =>{
  //   setTimeout(()=>{
  //      $scope.counter++
  //      $scope.$digest()
  //   },2000)
  //
  // }

  $scope.Decrement = () =>{
    $scope.counter--
  }

}

  angular.module('CounterApp',[])
  .controller('CounterAppController',CounterAppController);

  CounterAppController.$inject = ['$scope','$timeout']

})()
