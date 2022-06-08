import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  Container,
  ImageContainer,
  Details,
  QuantityDisplay,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { addItemToCart, deductItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(item);
  const deductItemHandler = () => deductItemFromCart(item);
  const removeItemHandler = () => removeItemFromCart(item);

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Details>{name}</Details>
      <QuantityDisplay>
        <div className="arrow" onClick={deductItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </QuantityDisplay>
      <Details>{price}</Details>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </Container>
  );
};

export default CheckoutItem;
