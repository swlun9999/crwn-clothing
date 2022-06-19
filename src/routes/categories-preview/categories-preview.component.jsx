import { Fragment } from "react";
import { useSelector } from "react-redux/es/exports";

import { selectProducts } from "../../store/products/products.selector";

import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const products = useSelector(selectProducts);

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
