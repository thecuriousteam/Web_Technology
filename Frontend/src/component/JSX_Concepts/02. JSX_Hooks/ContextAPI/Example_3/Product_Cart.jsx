// consumer
import React, { useContext } from "react";
import { CartContext } from "./Cart_Context";

const ProductCart = () => {
  // destructure cart and remove from cart
  const { cart, removeFromCart } = useContext(CartContext);

  console.log("Cart Context: ", cart);
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p> Your Cart Is Empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>
              Product Name: {item.name} - Peoduct Price: ${item.price}
            </h2>
            <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCart;
