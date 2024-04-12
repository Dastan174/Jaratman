import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="admin-inputs">
        <div className="container">
          <div className="admin-inputs">
            <TextField
              name="title"
              sx={{ width: "100% auto" }}
              placeholder="Title"
            />
            <TextField
              name="description"
              sx={{ width: "100% auto" }}
              placeholder="Description"
            />
            <TextField
              name="image"
              sx={{ width: "100% auto" }}
              placeholder="Image"
            />
            <TextField
              name="price"
              sx={{ width: "100% auto" }}
              placeholder="Price"
            />
            <TextField
              name="category"
              sx={{ width: "100% auto" }}
              placeholder="Category"
            />
            <Button variant="outlined">Save change</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
