import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const OneProductPage = () => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [modalBlock, setModalBlock] = useState("none");
  const navigate = useNavigate();
  const { id } = useParams();

  function openModal() {
    const block = "block";
    setModalBlock(block);
  }
  function closeModal() {
    setModalBlock("none");
  }
  function plusQuantity() {
    setCartQuantity(cartQuantity + 1);
  }
  function minusQuantity() {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  }
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1170px",
            paddingBottom: "100px",
          }}
          className="oneProduct"
        >
          <div className="oneProduct-image">
            <img
              style={{ width: "710px", borderRadius: "3px" }}
              src=""
              alt="image:/"
            />
          </div>
          <div style={{ marginLeft: "18px" }} className="oneProduct-title">
            <h1
              style={{
                fontSize: "42px",
                fontFamily: "sans-serif",
                width: "260px",
                fontWeight: "400",
                lineHeight: "49px",
              }}
            ></h1>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "500",
                margin: "15px 0",
              }}
            ></p>
            <div className="oneProduct-quantity">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  color: "gray",
                  fontWeight: "300",
                  letterSpacing: "1.4px",
                }}
              >
                Quantity
              </p>
              <div
                style={{
                  height: "50px",
                  width: "150px",
                  background: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                  border: "1px solid black",
                }}
                class="input-quantity"
              >
                <span
                  onClick={minusQuantity}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  class="minus"
                >
                  -
                </span>
                <span
                  style={{
                    borderRight: "2px solid rgba(0,0,0,0.2)",
                    borderLeft: "2px solid rgba(0,0,0,0.2)",
                    pointerEvents: "none",
                  }}
                  class="num"
                >
                  <p>{cartQuantity}</p>
                </span>
                <span
                  onClick={plusQuantity}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  class="plus"
                >
                  +
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "20px",
              }}
              className="btns"
            >
              <button
                style={{
                  width: "90%",
                  marginTop: "10px",
                  background: "#fce477",
                  border: "none",
                  height: "40px",
                  fontSize: "17px",
                  cursor: "pointer",
                }}
              >
                Buy
              </button>
              <button
                onClick={openModal}
                style={{
                  width: "90%",
                  marginTop: "10px",
                  background: "#fff",
                  border: "1px solid black",
                  height: "40px",
                  fontSize: "17px",
                  cursor: "pointer",
                }}
              >
                Add to cart
              </button>
            </div>
            <p
              style={{
                marginTop: "30px",
                color: "#121212BF",
                fontFamily: "sans-serif",
                fontSize: "16px",
                letterSpacing: "1.7px",
              }}
            ></p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "380px",
          height: "340px",
          border: "1px solid black",
          display: modalBlock,
          background: "#fff",
          position: "absolute",
          top: "160px",
          left: "902px",
        }}
      >
        <div style={{ padding: "20px" }} className="modal-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="item-added"
          >
            <CheckIcon style={{ fontSize: "19px" }} />
            <p style={{ fontSize: "15px", marginLeft: "10px" }}>
              Item added to your cart
            </p>
            <CloseIcon
              onClick={closeModal}
              sx={{
                position: "absolute",
                left: "352px",
                top: "2px",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            style={{
              padding: "17px 0",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
            className="productCart-title"
          >
            <img
              style={{ width: "68px", height: "96px", objectFit: "contain" }}
              src=""
              alt="image:/"
            />
            <h5
              style={{
                marginLeft: "13px",
                marginTop: "10px",
                fontSize: "17px",
                color: "#121212BF",
              }}
            ></h5>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "21px",
            }}
            className="modal-buttons"
          >
            <button
              onClick={() => navigate("/cart")}
              style={{
                background: "#fce477",
                border: "none",
                width: "294px",
                height: "40px",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              View my cart
            </button>
            <button
              style={{
                background: "none",
                border: "1px solid",
                width: "294px",
                height: "40px",
                fontSize: "17px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Check out
            </button>
            <p
              onClick={() => navigate("/")}
              style={{
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Continue Shopping
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProductPage;
