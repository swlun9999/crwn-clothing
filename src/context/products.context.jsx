import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocument,
  getCategoriesDocument,
} from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesDocument();
      setProducts(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
