(function() {
  var app = angular.module('store', []);
  
  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab == checkTab;
    };
  });
  
  app.controller('StoreController', function() {
    this.products = gems;
  });
  
  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
    this.isEmpty = function(obj) {
      var count = 0;
      for (var prop in obj) { count++; } 
      return count == 0;
    };
  });
  
  var gems = [
    {
      name: 'Dodecahedron',
      price: 1200,
      description: 'Shiny. Bold. Alien. A must have item.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 3,
          body: "I really liked this one",
          author: "JoJo@yahoo.com"
        } 
      ]
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