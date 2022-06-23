import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

import { getCategoriesDocument } from "../../utils/firebase/firebase.utils";

export const fetchProductsStart = (products) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (products) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());

    try {
      const categoryMap = await getCategoriesDocument();
      dispatch(fetchProductsSuccess(categoryMap));
    } catch (err) {
      dispatch(fetchProductsFailed(err));
    }
  };
};
