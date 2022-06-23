import { Fragment } from "react";
import { useSelector } from "react-redux/es/exports";

import {
  selectIsLoading,
  selectProducts,
} from "../../store/products/products.selector";

import CategoryPreview from "../../components/category-preview/category-preview";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(products).map((title) => {
          const productsPreview = products[title];
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={productsPreview}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
