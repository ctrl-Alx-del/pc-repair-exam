import { useContext } from "react";
import { CartContext } from "./UseCartContext.js";

export function useCart() {
  return useContext(CartContext);
}
