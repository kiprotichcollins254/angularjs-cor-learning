(()=>{
'use strict'

var shoppingproducts = [{"id":1,"ip_address":"192.70.58.156","product_name":"Cilantro / Coriander - Fresh","currency":"IDR","price":"17-551-8290","created_at":"2022-05-18 09:15:09"},
{"id":2,"ip_address":"165.94.165.42","product_name":"Beer - Upper Canada Light","currency":"RUB","price":"73-375-3964","created_at":"2022-09-08 17:31:55"},
{"id":3,"ip_address":"56.36.39.209","product_name":"Plasticforkblack","currency":"USD","price":"31-983-8785","created_at":"2023-01-08 07:11:59"},
{"id":4,"ip_address":"130.121.144.206","product_name":"Truffle Shells - White Chocolate","currency":"EUR","price":"10-980-1794","created_at":"2022-09-27 02:20:38"},
{"id":5,"ip_address":"244.29.58.74","product_name":"Tart - Raisin And Pecan","currency":"CNY","price":"30-947-5811","created_at":"2022-10-24 05:11:14"},
{"id":6,"ip_address":"167.17.238.7","product_name":"Ham - Smoked, Bone - In","currency":"RUB","price":"40-357-0305","created_at":"2023-02-19 11:18:47"},
{"id":7,"ip_address":"52.195.102.100","product_name":"Soup - Chicken And Wild Rice","currency":"RUB","price":"92-923-4190","created_at":"2023-04-09 16:16:14"},
{"id":8,"ip_address":"29.26.158.220","product_name":"Ice Cream - Strawberry","currency":"MYR","price":"36-770-3223","created_at":"2022-06-12 10:53:34"},
{"id":9,"ip_address":"147.130.13.170","product_name":"Cheese - Le Cru Du Clocher","currency":"BRL","price":"44-397-5769","created_at":"2022-12-04 20:55:48"},
{"id":10,"ip_address":"29.36.43.89","product_name":"Amaretto","currency":"NGN","price":"21-775-9758","created_at":"2022-06-09 17:19:33"},
{"id":11,"ip_address":"62.192.54.105","product_name":"Bay Leaf Ground","currency":"VND","price":"27-585-5233","created_at":"2022-06-17 06:37:19"},
{"id":12,"ip_address":"85.159.95.161","product_name":"Soup Campbells Turkey Veg.","currency":"RUB","price":"48-781-8286","created_at":"2023-04-09 18:19:31"},
{"id":13,"ip_address":"207.164.176.9","product_name":"Wine - Marlbourough Sauv Blanc","currency":"PLN","price":"31-563-4704","created_at":"2022-08-08 05:21:28"},
{"id":14,"ip_address":"104.36.27.44","product_name":"Halibut - Fletches","currency":"RUB","price":"16-759-0207","created_at":"2022-12-03 10:36:50"},
{"id":15,"ip_address":"98.179.178.89","product_name":"Table Cloth 62x120 Colour","currency":"ARS","price":"80-749-5499","created_at":"2022-09-16 18:01:19"},
{"id":16,"ip_address":"250.44.112.221","product_name":"Cheese - Feta","currency":"RSD","price":"31-180-7032","created_at":"2022-11-22 00:21:43"},
{"id":17,"ip_address":"37.152.119.67","product_name":"Puree - Strawberry","currency":"EUR","price":"74-464-2012","created_at":"2023-02-17 21:54:12"},
{"id":18,"ip_address":"242.201.79.138","product_name":"Ecolab - Orange Frc, Cleaner","currency":"EUR","price":"33-226-9259","created_at":"2023-03-23 11:06:15"},
{"id":19,"ip_address":"140.237.61.212","product_name":"Thyme - Lemon, Fresh","currency":"CNY","price":"88-855-9907","created_at":"2023-03-24 21:13:26"},
{"id":20,"ip_address":"45.197.135.48","product_name":"Pepper - Gypsy Pepper","currency":"PEN","price":"69-818-2164","created_at":"2023-01-17 07:58:34"}]

const NgRepeatAppController = ($scope,$timeout) =>{
  $scope.shoppingproducts = shoppingproducts;
}

  angular.module('NgRepeatApp',[])
  .controller('NgRepeatAppController',NgRepeatAppController);

  NgRepeatAppController.$inject = ['$scope']

})()
