// import React from "react";
// import { useCartContext } from "../../context/CartContext";
// import CartTable from "./CartTable";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const navigate = useNavigate()
//   const { cart } = useCartContext();
//   console.log(cart);
//   return (
//     <>
//       {cart.products.length > 0 ? (
//         <CartTable cart={cart} />
//       ) : (
//         <div className="container">
//           <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"100px 0"}} className="empty-cart">
//           <h1 style={{fontSize:"48px",fontWeight:"400"}}>Your cart is empty</h1>
//           <button onClick={()=> navigate("/")} style={{ marginTop: "50px",background:"#fce477",border:"none",width:"188px",height:"40px",fontSize:"17px",cursor:"pointer" }}>Continue Shopping</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CartPage;
