import { createContext } from "react";
import type { CartItem } from "../interfaces/Cartitems";
import type { Product } from "../interfaces/Product";
// import { createContext } from "react";

export interface CartContextType {
  cart: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>(null!);
