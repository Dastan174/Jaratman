// import React, { useState } from "react";
// import { useCartContext } from "../../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

// const CartTable = ({ cart }) => {
//   const [cartQuantity, setCartQuantity] = useState(1);
//   const navigate = useNavigate();
//   const { deleteFromCart, changeProductCount } = useCartContext();

//   function plusQuantity() {
//     setCartQuantity(cartQuantity + 1);
//   }
//   function minusQuantity() {
//     if (cartQuantity > 1) {
//       setCartQuantity(cartQuantity - 1);
//     }
//   }
//   return (
//     <div id="cartPage">
//       <div className="container">
//         <div className="cartPage">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "40px 0",
//             }}
//             className="main-title"
//           >
//             <h1 style={{ fontSize: "42px", fontWeight: "400" }}>Your cart</h1>
//             <p
//               onClick={() => navigate("/")}
//               style={{
//                 fontSize: "16px",
//                 textDecoration: "underline",
//                 cursor: "pointer",
//               }}
//             >
//               Continue Shopping
//             </p>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "20px 0",
//               borderBottom: "1px solid rgba(0,0,0,0.1)",
//               color: "#4d4d4d",
//               letterSpacing: "0.9px",
//               fontSize: "12px",
//               textTransform: "uppercase",
//             }}
//             className="info-title"
//           >
//             <p>Product</p>
//             <p style={{ marginLeft: "280px" }}>Quantity</p>
//             <p>Total</p>
//           </div>
//           {cart.products.map((el) => (
//             <div
//               style={{
//                 padding: "49px 0",
//                 borderBottom: "1px solid rgba(0,0,0,0.1)",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "start",
//               }}
//               className="cart-product"
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "start",
//                   justifyContent: "start",
//                   width: "360px",
//                 }}
//                 className="product-info"
//               >
//                 <img
//                   style={{
//                     width: "128px",
//                     height: "156px",
//                     objectFit: "contain",
//                   }}
//                   src={el.item.image}
//                   alt=""
//                 />
//                 <div style={{ marginLeft: "30px" }} className="product-title">
//                   <h4
//                     style={{
//                       color: "#4d4d4d",
//                       letterSpacing: "0.7px",
//                     }}
//                   >
//                     {el.item.title}
//                   </h4>
//                   <p style={{ marginTop: "20px" }}>$ {el.item.price}.00</p>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   width: "190px",
//                 }}
//                 className="quantity"
//               >
//                 <div
//                   style={{
//                     height: "50px",
//                     width: "150px",
//                     background: "none",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "7px",
//                     boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
//                     border: "1px solid black",
//                   }}
//                   class="input-quantity"
//                 >
//                   <span
//                     onClick={minusQuantity}
//                     style={{
//                       width: "100%",
//                       textAlign: "center",
//                       cursor: "pointer",
//                     }}
//                     class="minus"
//                   >
//                     -
//                   </span>
//                   <span
//                     style={{
//                       borderRight: "2px solid rgba(0,0,0,0.2)",
//                       borderLeft: "2px solid rgba(0,0,0,0.2)",
//                       pointerEvents: "none",
//                     }}
//                     class="num"
//                   >
//                     <p
//                       value={cartQuantity}
//                       onChange={()=> changeProductCount(cartQuantity,el.item.id)}
//                     >
//                       {cartQuantity}
//                     </p>
//                   </span>
//                   <span
//                     onClick={plusQuantity}
//                     style={{
//                       width: "100%",
//                       textAlign: "center",
//                       cursor: "pointer",
//                     }}
//                     class="plus"
//                   >
//                     +
//                   </span>
//                 </div>
//                 <DeleteOutlineRoundedIcon
//                   onClick={() => deleteFromCart(el.item.id)}
//                   sx={{ fontSize: "21px", cursor: "pointer" }}
//                 />
//               </div>
//               <div className="total">
//                 <p style={{ marginLeft: "10px" }}>${el.subPrice}.00</p>
//               </div>
//             </div>
//           ))}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "end",
//               padding: "60px 0",
//             }}
//             className="check-out"
//           >
//             <h3 style={{ fontSize: "19px" }}>
//               <span
//                 style={{
//                   fontSize: "16px",
//                   letterSpacing: "0.7px",
//                   color: "#4d4d4d",
//                   marginRight: "5px",
//                 }}
//               >
//                 Subtotal
//               </span>{" "}
//               ${cart.subTotal}.00 USD
//             </h3>
//             <p style={{ margin: "20px 0", color: "#4d4d4d", fontSize: "15px" }}>
//               Taxes and shipping price calculated at checkout
//             </p>
//             <button
//               style={{
//                 background: "#fce477",
//                 border: "none",
//                 width: "308px",
//                 height: "40px",
//                 fontSize: "17px",
//                 cursor: "pointer",
//               }}
//             >
//               Check Out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartTable;
