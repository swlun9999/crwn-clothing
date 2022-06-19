import { createSelector } from "reselect";

const selectProductsReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsMap = createSelector(
  [selectProducts],
  (products) => {
    console.log(products);
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
