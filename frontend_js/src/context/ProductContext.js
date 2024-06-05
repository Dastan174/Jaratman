import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_URL } from "../helpers/Api";
import Cookies from "js-cookie";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [product, setProducts] = useState([]);
  const token = Cookies.get("token");

  async function createProduct(newProduct) {
    try {
      const res = await axios.post(`${API_URL}/product/add/`, newProduct, {
        headers: {
          'token': token
        }
      });
      return res.data;
    } catch (error) {
      console.error("Ошибка при создании продукта:", error);
      throw error; 
    }
  }

  async function getProducts() {
    try {
      const res = await axios.get(`${API_URL}/product/get/`);
      setProducts(res.data);
    } catch (error) {
      console.error("Ошибка при получении списка продуктов:", error);
      throw error;
    }
  }

  async function deleteProduct(urls) {
    try {
      await axios.delete(`${API_URL}/product/delete/${urls}`, {
        headers: {
          'token': token
        }
      });
      await getProducts();
    } catch (error) {
      console.error("Ошибка при удалении продукта:", error);
      throw error;
    }
  }

  const values = {
    createProduct,
    getProducts,
    deleteProduct,
    product:product.products,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;