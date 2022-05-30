import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add To Card</Button>
    </div>
  );
};

export default ProductCard;
