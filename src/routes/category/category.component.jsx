import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";

import { ProductsContext } from "../../context/products.context";

import ProductCard from "../../components/product-card/product-card-component";

import { Container, Title } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    setShowProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <Container>
        {showProducts &&
          showProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Container>
    </Fragment>
  );
};

export default Category;
