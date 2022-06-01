import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { ProductsContext } from "../../context/products.context";

import ProductCard from "../../components/product-card/product-card-component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [showProducts, setShowProducts] = useState(products);

  useEffect(() => {
    setShowProducts(products[category]);
  }, [category, products]);

  return (
    <div className="category-container">
      <h2>
        <span>{category.toUpperCase()}</span>
      </h2>
      {showProducts &&
        showProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
