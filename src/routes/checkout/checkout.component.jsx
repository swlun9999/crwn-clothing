import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotalAmount,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { Container, Header, HeaderBlock, Total } from "./checkout.styles.jsx";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <Container>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <Total>TOTAL: ${totalAmount}</Total>
    </Container>
  );
};

export default CheckOut;
