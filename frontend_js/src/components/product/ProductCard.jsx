import { Button } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        onClick={() => navigate(`product/${item.id}`)}
        className="product-image"
        src=""
      />
      <div className="card-options">
        <div className="title">
          <p className="product-title"></p>
          <p className="product-price">$ USD</p>
        </div>

        <div key={index} className="btns">
          <Button onClick={() => deleteProduct(item.id)} variant="contained">
            delete
          </Button>
          <Button onClick={() => navigate(`edit/`)}>edit</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
