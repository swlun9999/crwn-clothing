import { useSelector, useDispatch } from "react-redux";

import {
  addItemToCart,
  deductItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  Container,
  ImageContainer,
  Details,
  QuantityDisplay,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = item;
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const deductItemHandler = () => dispatch(deductItemFromCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Details>{name}</Details>
      <QuantityDisplay>
        <Arrow onClick={deductItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantityDisplay>
      <Details>{price}</Details>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </Container>
  );
};

export default CheckoutItem;
