import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new arry with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deductCartItem = (cartItems, productToDeduct) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDeduct.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDeduct.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToDeduct.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems;
};

const removeCartItem = (cartItems, productToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

//////////////////////////   EXPORT   ///////////////////////////////
/////////////////////////////////////////////////////////////////////
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
  });
};

export const deductItemFromCart = (cartItems, productToDeduct) => {
  const newCartItems = deductCartItem(cartItems, productToDeduct);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
  });
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
  });
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { isCartOpen: boolean });
