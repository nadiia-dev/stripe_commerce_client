export const isInCart = (id, cartItems) => {
  return cartItems.find((item) => Number(item.id) === Number(id));
};
