import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectTotalCount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalAmount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  )
);
