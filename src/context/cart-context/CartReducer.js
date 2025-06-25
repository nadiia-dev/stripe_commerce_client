export const sumItems = (cartItems) => {
  return {
    itemsCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case "INCREASE": {
      const newCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        cartItems: newCartItems,
        ...sumItems(newCartItems),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
