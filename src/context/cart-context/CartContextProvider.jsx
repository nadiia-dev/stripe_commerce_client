import { useReducer } from "react";
import { CartContext } from "./CartContext";
import cartReducer from "./CartReducer";

const initialState = { cartItems: [], itemsCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });

  const values = {
    ...state,
    addItem,
    increase,
  };

  return <CartContext value={values}>{children}</CartContext>;
};

export default CartContextProvider;
