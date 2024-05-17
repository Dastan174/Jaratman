import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_URL } from "../helpers/Api";
import Cookies from "js-cookie";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const token = Cookies.get("token");

  async function createProduct(newProduct) {
    try {
      const res = await axios.post(`${API_URL}/product/add`, newProduct,{headers: {
        'token': `${token}`
      }
    });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getProducts() {
    let res = await axios.get(`${API_URL}/product/get/`);
    setProduct(res.data);
  }
  async function deleteProduct(id){
     await axios.delete(`${API_URL}/product/delete/${id}`)
  }
  const values = {
    createProduct,
    getProducts,
    product:product.products,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
