export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalCount = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const selectTotalAmount = (state) =>
  state.cart.cartItems.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );
