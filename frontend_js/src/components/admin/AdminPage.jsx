import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import axios from "axios";
import { API_URL } from "../../helpers/Api";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
  }


);
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
      navigate("/")
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
    navigate("/")
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
// =======
const init = {
  title: "",
  description: "",
  // image: "",
  price: 0,
  quantity: 0,
  category: "",
  availability: "",
  discount: 0,
};
const AdminPage = () => {
  const [product, setProduct] = useState(init);
  const { createProduct } = useProducts();
  console.log(product);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }
// >>>>>>> Stashed changes

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }
  return (
    <>
      <div id="admin-inputs">
        <h1 style={{ fontSize: "38px", margin: "60px 0", textAlign: "center" }}>
          Admin Page
        </h1>
        <div className="container">
          <div className="admin-inputs">
{/* <<<<<<< Updated upstream */}
            <CustomInput
              onHandle={inputChangeHandler("name")}
              placeholder="Name"
              value={inpValue.name}
            <TextField
              onChange={handleInp}
              name="title"
              sx={{ width: "100% auto" }}
              placeholder="Title"
              value={product.title}
{/* >>>>>>> Stashed changes */}
            />
            <CustomInput
              onHandle={inputChangeHandler("description")}
              placeholder="Description"
// <<<<<<< Updated upstream
              // value={inpValue.description}
            />
            <CustomInput
              onHandle={inputChangeHandler("image")}
              placeholder="image"
              // value={inpValue.image}
// =======
              value={product.description}
            />
            <TextField
              onChange={handleInp}
              name="image"
              sx={{ width: "100% auto" }}
              placeholder="Image"
              value={product.image}
{/* >>>>>>> Stashed changes */}
            />
            <CustomInput
              onHandle={inputChangeHandler("price")}
              placeholder="price"
              type="number"
// <<<<<<< Updated upstream
              // value={inpValue.price}
// =======
              name="price"
              sx={{ width: "100% auto" }}
              placeholder="Price"
              value={product.price}
{/* >>>>>>> Stashed changes */}
            />
            <CustomInput
              onHandle={inputChangeHandler("quantity")}
              placeholder="Quantity"
// <<<<<<< Updated upstream
              type="number"
              // value={inpValue.quantity}
// =======
              value={product.quantity}
{/* >>>>>>> Stashed changes */}
            />
            <CustomInput
              onHandle={inputChangeHandler("category")}
              placeholder="Category"
// <<<<<<< Updated upstream
              // value={inpValue.category}
// =======
              value={product.category}
{/* >>>>>>> Stashed changes */}
            />
            <CustomInput
              onHandle={inputChangeHandler("availability")}
              placeholder="Availability"
              value={product.availability}
            />
            <CustomInput
              onHandle={inputChangeHandler("discount")}
              placeholder="Discount"
// <<<<<<< Updated upstream
              type="number"
            />
            <Button onClick={addProduct} variant="outlined">
{/* ======= */}
              value={product.discount}
            />
            <Button onClick={() => addProduct} variant="outlined">
{/* >>>>>>> Stashed changes */}
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
