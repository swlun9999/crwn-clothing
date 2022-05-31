import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="name" />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
