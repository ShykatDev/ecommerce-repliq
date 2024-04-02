import { useReducer } from "react";
import { CartContext } from "../context";
import { cartReducer, initialState } from "../reducers/cartReducer";

const CartProviders = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProviders;
