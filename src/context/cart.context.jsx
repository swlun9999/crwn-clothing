import { createContext, useState, useEffect } from "react";

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

  if (existingCartItem === 1) {
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cardItems: [],
  totalCount: 0,
  totalAmount: 0,
  setTotalCount: () => {},
  addItemToCart: () => {},
  deductItemFromCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCardItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setTotalCount(count);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setTotalAmount(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCardItems(addCartItem(cartItems, productToAdd));

  const deductItemFromCart = (productToDeduct) =>
    setCardItems(deductCartItem(cartItems, productToDeduct));

  const removeItemFromCart = (productToRemove) =>
    setCardItems(removeCartItem(cartItems, productToRemove));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    totalCount,
    totalAmount,
    addItemToCart,
    deductItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
