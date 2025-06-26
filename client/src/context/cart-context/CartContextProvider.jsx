import { useReducer } from "react";
import { CartContext } from "./CartContext";
import cartReducer from "./CartReducer";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  itemsCount: 0,
  total: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });
  const decrease = (product) =>
    dispatch({ type: "DECREASE", payload: product });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const values = {
    ...state,
    addItem,
    increase,
    decrease,
    removeItem,
    clearCart,
  };

  return <CartContext value={values}>{children}</CartContext>;
};

export default CartContextProvider;
