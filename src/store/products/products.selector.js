import { createSelector } from "reselect";

const selectProductsReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsMap = createSelector(
  [selectProducts],
  (products) => {
    return (
      Array.isArray(products) &&
      products.reduce((accArray, product) => {
        const { title, items } = product;
        accArray[title.toLowerCase] = items;

        return accArray;
      }, [])
    );
  }
);

export const selectIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);
