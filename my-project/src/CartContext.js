import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addToCart(product){
    setCart([...cart, product]);
  }

  function removeFromCart(index){
    setCart(cart.filter((_,i)=> i !== index));
  }

  return(

    <CartContext.Provider
      value={{cart, addToCart, removeFromCart}}
    >
      {children}
    </CartContext.Provider>

  );

}