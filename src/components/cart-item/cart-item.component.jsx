import {
  Container,
  ItemDetails,
  Name,
} from "./cart-item.styles.jsx";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <Container>
      <img src={imageUrl} alt="name" />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </Container>
  );
};

export default CartItem;
