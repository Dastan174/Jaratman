import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const AdminPage = () => {
    const { createProduct } = useProducts();
  const [inpValue, setInpValue] = useState({
    title: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    category: "",
    availability: "",
    discount: 0,
  });
  console.log(inpValue);
  function handleInp(e) {
    const { name, value } = e.target;
    setInpValue({ ...inpValue, [name]: value });
  }
  function addProduct(){
    createProduct(inpValue)
  }

  return (
    <>
      <div id="admin-inputs">
        <h1 style={{ fontSize: "38px", margin: "60px 0", textAlign: "center" }}>
          Admin Page
        </h1>
        <div className="container">
          <div className="admin-inputs">
            <TextField
              onChange={handleInp}
              name="title"
              sx={{ width: "100% auto" }}
              placeholder="Title"
            />
            <TextField
              onChange={handleInp}
              name="description"
              sx={{ width: "100% auto" }}
              placeholder="Description"
            />
            <TextField
              onChange={handleInp}
              name="image"
              sx={{ width: "100% auto" }}
              placeholder="Image"
            />
            <TextField
              onChange={handleInp}
              type="number"
              name="price"
              sx={{ width: "100% auto" }}
              placeholder="Price"
            />
            <TextField
              onChange={handleInp}
              type="number"
              name="quantity"
              sx={{ width: "100% auto" }}
              placeholder="Quantity"
            />
            <TextField
              onChange={handleInp}
              name="category"
              sx={{ width: "100% auto" }}
              placeholder="Category"
            />
            <TextField
              onChange={handleInp}
              name="availability"
              sx={{ width: "100% auto" }}
              placeholder="Availability"
            />
            <TextField
              onChange={handleInp}
              type="number"
              name="discount"
              sx={{ width: "100% auto" }}
              placeholder="Discount"
            />
            <Button onClick={() => addProduct} variant="outlined">Add Product</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
