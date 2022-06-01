import { Fragment, useContext } from "react";

import { ProductsContext } from "../../context/products.context";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => {
        const productsPreview = products[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={productsPreview}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
