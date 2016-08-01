(function() {
  var app = angular.module('store', []);
  
  app.controller('StoreController', function() {
    this.products = gems;
  });
  
  var gems = [
    {
      name: 'Dodecahedron',
      price: 1200,
      description: 'Shiny. Bold. Alien. A must have item.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Ruby', 
      price: 3000,
      description: "Red and plump",
      canPurchase: true,
      soldOut: true
    }
  ];
})();