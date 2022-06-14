import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

import { userReducer } from "./user/user.reducer";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const reducer = {
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
