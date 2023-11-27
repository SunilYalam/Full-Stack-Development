function createProductFilter(products) {
    // Return a function that filters products by a given category
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  
  // Sample array of products
  const productsArray = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Hat', category: 'Accessories' },
    { name: 'Sunglasses', category: 'Accessories' },
  ];
  
  // Create a product filter function for the given array
  const filterProductsByCategory = createProductFilter(productsArray);
  
  // Use the returned function to filter products by a specific category
  const electronicsProducts = filterProductsByCategory('Accessories');
  const clothingProducts = filterProductsByCategory('Clothing');
  
  // Output the filtered arrays
  console.log("Clothing Products:", clothingProducts);
  console.log("Electronics Products:", electronicsProducts);
  