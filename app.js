// (()=>{
//   'use strict';
//
//   ///dependency injection
//     const CalController = ($scope,$filter) => {
//       $scope.name = "";
//       $scope.totalValue = 0;
//
//       $scope.displayNumeric = () => {
//         var totalNameValue = calculateNumericString($scope.name) ;
//         $scope.totalValue = totalNameValue
//       }
//
//       const calculateNumericString = (string) =>{
//         var totalStringValue = 0;
//         for(var i = 0;i < string.length;i++){
//           totalStringValue += string.charCodeAt(i);
//         }
//         return totalStringValue
//       }
//
//       $scope.upper = () => {
//         var upCase = $filter('uppercase')
//         $scope.name = upCase($scope.name)
//       }
//     }
//
//   angular.module('AppCalculator',[])
//   .controller('AppCalculatorController',CalController
// );
//
// ////inject the DI for minification
// CalController.$inject = ['$scope','$filter']
//
// })();
(()=>{"use strict";const a=(a,e)=>{a.name="",a.totalValue=0,a.displayNumeric=()=>{var e=r(a.name);a.totalValue=e};const r=a=>{for(var e=0,r=0;r<a.length;r++)e+=a.charCodeAt(r);return e};a.upper=()=>{var r=e("uppercase");a.name=r(a.name)}};angular.module("AppCalculator",[]).controller("AppCalculatorController",a),a.$inject=["$scope","$filter"]})();
