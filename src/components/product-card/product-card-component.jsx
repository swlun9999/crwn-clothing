import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button from "../button/button.component";

import { Container, Footer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <Container>
      <img src={imageUrl} alt={name}></img>
      <Footer>
        <span>{name}</span>
        <span>{price}</span>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Card
      </Button>
    </Container>
  );
};

export default ProductCard;
