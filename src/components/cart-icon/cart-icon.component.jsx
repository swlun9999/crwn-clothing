import { useSelector, useDispatch } from "react-redux";

import {
  selectIsCartOpen,
  selectTotalCount,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import { Container, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const totalCount = useSelector(selectTotalCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <Container onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{totalCount}</ItemCount>
    </Container>
  );
};

export default CartIcon;
