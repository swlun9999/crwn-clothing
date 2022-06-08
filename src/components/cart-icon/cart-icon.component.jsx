import { useContext } from "react";

import { Container, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <Container onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{totalCount}</ItemCount>
    </Container>
  );
};

export default CartIcon;
