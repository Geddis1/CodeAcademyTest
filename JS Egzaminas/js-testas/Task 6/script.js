/* ------------------------------ TASK 6 -----------------------------------
Turimas "products" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getAveragePrice" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" vidutinę kainą kaip skaičių.
2. funkcija "getProductsNames" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" pavadinimus naujame masyve pvz., ['Product 1', 'Product 2', ...].
3. funkcija "getUniqueCategories" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų unikalių "products" kategorijų sąrašą.
-------------------------------------------------------------------------- */

// const products = [
//   { id: '1', name: 'Product 1', price: 10, category: 'Electronics' },
//   { id: '2', name: 'Product 2', price: 20, category: 'Books' },
//   { id: '3', name: 'Product 3', price: 30, category: 'Clothing' },
//   { id: '4', name: 'Product 4', price: 40, category: 'Electronics' },
//   { id: '5', name: 'Product 5', price: 50, category: 'Books' },
// ];

function getAveragePrice(products) {
  if (products.length === 0) return 0;

  const totalPrices = products.reduce((sum, product) => sum + product.price, 0);
  return totalPrices / products.length;
}

function getProductsNames(products) {
  return products.map((product) => product.name);
}

function getUniqueCategories(products) {
  const categoriesSet = new Set(products.map((product) => product.category));
  return Array.from(categoriesSet);
}

const products = [
  { id: "1", name: "Product 1", price: 10, category: "Electronics" },
  { id: "2", name: "Product 2", price: 20, category: "Books" },
  { id: "3", name: "Product 3", price: 30, category: "Clothing" },
  { id: "4", name: "Product 4", price: 40, category: "Electronics" },
  { id: "5", name: "Product 5", price: 50, category: "Books" },
];

console.log(getAveragePrice(products));
console.log(getProductsNames(products));
console.log(getUniqueCategories(products));
