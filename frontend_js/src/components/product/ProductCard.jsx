import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        onClick={() => navigate(`product/${item.urls}`)}
        className="product-image"
        src={`data:image/jpeg;base64, ${item.image}`}
        alt="Product Image"
      />
      <div className="card-options">
        <div className="title">
          <p className="product-title">{item.name}</p>
          <p className="product-price">$ {item.price}USD</p>
        </div>

        <div className="btns">
          <Button onClick={() => deleteProduct(item.urls)} variant="contained">
            delete
          </Button>
          <Button onClick={() => navigate(`edit/`)}>edit</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
