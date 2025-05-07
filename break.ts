let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products.length; i++) {
  if (products[i].price == 1200)
      break;
}

// show the products
console.log(products[i]);
let discount2 = 0;
let product = products[0];

switch (product.name) {
    case 'phone':
        discount2 = 5;
        break;
    case 'tablet':
        discount2 = 10;
        break;
    case 'laptop':
        discount2 = 15;
        break;
}

console.log(`There is a ${discount2}% on ${product.name}.`);