// import React, { createContext, useContext, useReducer } from "react";
// import { ACTION_CART } from "../helpers/const";
// import { calcSubPrice, calcTotalPrice } from "../helpers/function";

// const INIT_STATE = {
//   cart: JSON.parse(localStorage.getItem("cart")),
// };
// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case ACTION_CART.CHECK_CART:
//       return { ...state, cart: action.payload };
//     default:
//       return state;
//   }
// };

// const cartContext = createContext();
// export const useCartContext = () => useContext(cartContext);
// const CartContext = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);
//   function productToCart(product) {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if (!cart) {
//       cart = {
//         products: [],
//         subTotal: 0,
//       };
//     }
//     let newProduct = {
//       item: product,
//       count: 1,
//       subPrice: +product.price,
//     };
//     cart.products.push(newProduct);
//     cart.subTotal = calcTotalPrice(cart.products);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     getProductCart();
//   }
//   function getProductCart() {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if (!cart) {
//       localStorage.setItem(
//         "cart",
//         JSON.stringify({
//           products: [],
//           subTotal: 0,
//         })
//       );
//     }
//     dispatch({
//       type: ACTION_CART.CHECK_CART,
//       payload: cart,
//     });
//   }
//   function checkProductCart(id) {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     if (cart) {
//       let obj = cart.products.find((el) => el.item.id === id);
//       return obj ? true : false;
//     }
//   }
//   function deleteFromCart(id) {
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     cart.products = cart.products.filter((el) => el.item.id !== id);
//     cart.subTotal = calcTotalPrice(cart.products);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     getProductCart();
//   }
//   function changeProductCount(count, id) {
//     if (count < 1) {
//       return alert("stop");
//     }
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     cart.products = cart.products.map((el) => {
//       if (el.item.id === id) {
//         el.count = count
//         el.subPrice = calcSubPrice(el)
//       }
//       return el;
//     });
//     cart.subTotal = calcTotalPrice(cart.product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     getProductCart();
//   }
//   const values = {
//     productToCart,
//     checkProductCart,
//     deleteFromCart,
//     changeProductCount,
//     cart: state.cart,
//   };
//   return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
// };

// export default CartContext;
