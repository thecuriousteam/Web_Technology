const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 499.99, category: "Electronics" },
  { id: 3, name: "Headphones", price: 199.99, category: "Accessories" },
  { id: 4, name: "Coffee Maker", price: 89.99, category: "Home Appliances" },
];

// search by prodtuct (.includes)
const searchProduct = (item) => {
  return products.filter((eachProduct) =>
    eachProduct.name.toLowerCase().includes(item.toLowerCase())
  );
};
const search = searchProduct("laptop");
console.log(search);

// search by category (===)
const searchCategory = (categoryName) => {
  return products.filter(
    (eachProductCategory) =>
      eachProductCategory.category.toLowerCase() === categoryName.toLowerCase()
  );
};
const searchByCategory = searchCategory("Electronics");
console.log(searchByCategory);

// add additional field
const pricePlusGST = products.map((eachproduct) => ({
  ...eachproduct,
  gst: eachproduct.price + eachproduct.price * 0.18,
}));

console.log(pricePlusGST);

const totalCostGST = pricePlusGST.reduce(
  (presentvalue, item) => presentvalue + item.gst,
  0
);

const totalCostActual = pricePlusGST.reduce(
  (presentValue, item) => presentValue + item.price,
  0
);

console.log(
  "Total Price is:",
  totalCostGST.toFixed() - totalCostActual.toFixed()
);
