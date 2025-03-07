// Step - 2

import { useContext } from "react";
import { CartContext } from "./Cart_Context";

// consumers
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

// add product to cart
export const ProductList = () => {
  // destructure the addToCart from provider

  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products List</h1>

      {/* Implementing Add to product logic */}
      {products.map((items) => (
        <div key={items.id} className="gap-2 p-2">
          <h2>
            Product Name: {items.name} - Peoduct Price: ${items.price}
          </h2>
          <button onClick={() => addToCart(items)}>Add Item</button>

          {/* {console.log("Cart Data: ", cart)} */}
        </div>
      ))}
    </div>
  );
};
