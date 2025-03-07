// Step - 2 Creating Provider
import { CartContext } from "./Cart_Context";
import { useState } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Providers
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((items) => items.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
