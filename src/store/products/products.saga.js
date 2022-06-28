import { takeLatest, all, call, put } from "redux-saga/effects";

import { PRODUCTS_ACTION_TYPES } from "./products.types";
import { getCategoriesDocument } from "../../utils/firebase/firebase.utils";
import { fetchProductsSuccess, fetchProductsFailed } from "./products.action";

function* fetchProductsAsync() {
  try {
    const categoryMap = yield call(getCategoriesDocument);
    yield put(fetchProductsSuccess(categoryMap));
  } catch (err) {
    yield put(fetchProductsFailed(err));
  }
}

export function* onFetchProducts() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
