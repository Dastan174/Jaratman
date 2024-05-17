import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../product/ProductCard";

const Hero = () => {
  const { product, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
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
        >
          {product ? (
            product.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))
          ) : (
            <h1>Oops! We try to fix</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
