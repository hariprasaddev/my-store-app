import { useState } from "react";
import type { ReactNode } from "react";

// import { CartContext } from "./CartContext";
import { CartContext } from "./CartContext";
import type { CartItem } from "../interfaces/Cartitems";
import type { Product } from "../interfaces/Product";

import {
  addToCart as addAction,
  removeFromCart as removeAction,
  increaseQuantity as increaseAction,
  decreaseQuantity as decreaseAction,
  clearCart as clearAction,
} from "./CartActions";

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const draft = [...prev];
      addAction(draft, product);
      return draft;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const draft = [...prev];
      removeAction(draft, id);
      return draft;
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) => {
      const draft = [...prev];
      increaseAction(draft, id);
      return draft;
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) => {
      const draft = [...prev];
      decreaseAction(draft, id);
      return draft;
    });
  };

  const clearCart = () => {
    setCart((prev) => {
      const draft = [...prev];
      clearAction(draft);
      return draft;
    });
  };
  

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;