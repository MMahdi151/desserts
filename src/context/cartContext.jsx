import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const exists = cart.find((cartItem) => cartItem.name === item.name);
    if (exists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...exists, quantity: exists.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    console.log(cart);
  }
  function removeFromCart(item) {
    const exists = cart.find((cartItem) => cartItem.name === item.name);
    if (exists) {
      if (exists.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.name !== item.name));
      } else {
        setCart(
          cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...exists, quantity: exists.quantity - 1 }
              : cartItem
          )
        );
      }
    }
  }

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const getTotalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
