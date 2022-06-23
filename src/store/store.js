import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { logger } from "./middleware/logger";
import { userReducer } from "./user/user.reducer";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composedEnhancers = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      composedEnhancers
    ),
});

export const persistor = persistStore(store);
