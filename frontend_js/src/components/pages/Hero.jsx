import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";

const Hero = () => {
  const { product, getProducts } = useProducts();
  console.log(product);
  return (
    <section id="products">
      <div className="container">
        <div
          className="products"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "1170px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
