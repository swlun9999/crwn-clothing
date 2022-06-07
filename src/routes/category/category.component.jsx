import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";

import { ProductsContext } from "../../context/products.context";

import ProductCard from "../../components/product-card/product-card-component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    setShowProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {showProducts &&
          showProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
