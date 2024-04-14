import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_URL } from "../helpers/Api";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  async function createProduct(newProduct) {
    try {
      await axios.post(`${API_URL}/product/add/`, newProduct);
    } catch (error) {
      console.log("error");
    }
  }
  async function getProducts() {
    let res = await axios.get(API_URL);
    setProduct(res.data);
  }
  const values = {
    createProduct,
    getProducts,
    product,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
