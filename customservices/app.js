(()=>{
'use strict'

const ShoppingCartService = () =>{
  var service = this
  var items = []

  service.addItem = (item_name,item_quantity) => {
     var item = {
       itemName : item_name,
       itemQuantity:item_quantity
     }
     items.push(item)
  }

  service.getItems = () => {
     return items
  }
}

const ItemController = (ShoppingCartService) =>{
   var ItemAdder = this
   ItemAdder.itemName = ''
   ItemAdder.itemQuantity = ''

   ItemAdder.addItem = () => {
    ShoppingCartService.addItem(ItemAdder.itemName,ItemAdder.itemQuantity)
   }

   console.log(ItemAdder.itemName,ItemAdder.itemQuantity)
}

const CartController = (ShoppingCartService) =>{
   var CartItems = this
   CartItems.items = ShoppingCartService.getItems()
}



  angular.module('ShoppingApp',[])
  .controller('ItemController',ItemController)
  .controller('CartController',CartController)
  .service('ShoppingCartService',ShoppingCartService)
  ;

  // services will be shared amount the items
  ItemController.$inject = ['ShoppingCartService']

  CartController.$inject = ['ShoppingCartService']

})()
