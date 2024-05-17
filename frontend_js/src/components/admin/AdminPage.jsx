import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import axios from "axios";
import { API_URL } from "../../helpers/Api";

{
  /* <TextField
  onChange={handleInp}
  name="title"
  sx={{ width: "100% auto" }}
  placeholder="Title"
  value={inpValue.title}
/>; */
}

const CustomInput = ({ type = "text", placeholder, onHandle, value }) => {
  return (
    <TextField
      type={type}
      onChange={onHandle}
      sx={{ width: "100% auto" }}
      placeholder={placeholder}
      value={value}
    />
  );
};

const AdminPage = () => {
  const [data, setData] = useState([]);
  const { createProduct } = useProducts();
  const [inpValue, setInpValue] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    quantity: 0,
    image: "",
    availability: "",
    discount: 0,
  });
  const inputChangeHandler = (name) => {
    return (event) => {
      const { value } = event.target;
      setInpValue((prevState) => ({ ...prevState, [name]: value }));
    };
  };
  async function addProduct() {
    try {
      await createProduct(inpValue);
      // Опционально: очищаем поля ввода после успешного добавления продукта
      setInpValue({
        name: "",
        description: "",
        image: "",
        price: 0,
        quantity: 0,
        category: "",
        availability: "",
        discount: 0,
      });
      console.log("Продукт успешно добавлен");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
  }
  const fetchAllProducts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/product/get`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(data?.products);
  console.log(inpValue);

  return (
    <>
      <div id="admin-inputs">
        <h1 style={{ fontSize: "38px", margin: "60px 0", textAlign: "center" }}>
          Admin Page
        </h1>
        <div className="container">
          <div className="admin-inputs">
            <CustomInput
              onHandle={inputChangeHandler("name")}
              placeholder="Name"
              // value={inpValue.name}
            />
            <CustomInput
              onHandle={inputChangeHandler("description")}
              placeholder="Description"
              // value={inpValue.description}
            />
            <CustomInput
              onHandle={inputChangeHandler("image")}
              placeholder="image"
              // value={inpValue.image}
            />
            <CustomInput
              onHandle={inputChangeHandler("price")}
              placeholder="price"
              type="number"
              // value={inpValue.price}
            />
            <CustomInput
              onHandle={inputChangeHandler("quantity")}
              placeholder="Quantity"
              type="number"
              // value={inpValue.quantity}
            />
            <CustomInput
              onHandle={inputChangeHandler("category")}
              placeholder="Category"
              // value={inpValue.category}
            />
            <CustomInput
              onHandle={inputChangeHandler("availability")}
              placeholder="Availability"
            />
            <CustomInput
              onHandle={inputChangeHandler("discount")}
              placeholder="Discount"
              type="number"
            />
            <Button onClick={addProduct} variant="outlined">
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
