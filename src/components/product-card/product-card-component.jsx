import { useContext } from "react";

import Button from "../button/button.component";

import { Container, Footer } from "./product-card.styles.jsx";

import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
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
