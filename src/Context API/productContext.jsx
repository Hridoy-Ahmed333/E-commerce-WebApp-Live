import React, { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  return (
    <ProductContext.Provider
      value={{ productData, setProductData, pageNo, setPageNo }}
    >
      {children}
    </ProductContext.Provider>
  );
};
