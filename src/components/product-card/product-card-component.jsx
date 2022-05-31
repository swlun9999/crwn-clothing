import { useContext } from "react";

import Button from "../button/button.component";

import "./product-card.styles.scss";

import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Card
      </Button>
    </div>
  );
};

export default ProductCard;
