import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux/es/exports";

import {
  selectProducts,
  selectIsLoading,
} from "../../store/products/products.selector";

import ProductCard from "../../components/product-card/product-card-component";
import Spinner from "../../components/spinner/spinner.component";

import { Container, Title } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    setShowProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          {showProducts &&
            showProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Container>
      )}
    </Fragment>
  );
};

export default Category;
