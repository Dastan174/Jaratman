import React from "react";
import { Route, Routes } from "react-router-dom";
import { ADMIN_USER } from "../helpers/const";
// import { ProtectedRoutes } from "../helpers/function";
import RegisterPage from "../components/authorization/RegisterPage";
import AuthenticationPage from "../components/authorization/AuthenticationPage";
import AdminPage from "../components/admin/AdminPage";
import EditProduct from "../components/product/EditProduct";
import Home from "../helpers/Home";
import OneProductPage from "../components/product/OneProductPage";
import AboutUs from "../components/pages/AboutUs";
import CartPage from "../components/cart/CartPage";
import Contact from "../components/pages/Contact";
import TermsOfService from "../components/pages/TermsOfService";
import ShippingPolicy from "../components/pages/ShippingPolicy";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 1 },
    { link: `edit/:id`, element: <EditProduct />, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/product/:id", element: <OneProductPage />, id: 2 },
    { link: "/login", element: <AuthenticationPage />, id: 3 },
    { link: "/registration", element: <RegisterPage />, id: 4 },
    { link: "/about-us", element: <AboutUs />, id: 5 },
    { link: "/terms", element: <TermsOfService />, id: 6 },
    { link: "/shipping", element: <ShippingPolicy />, id: 7 },
    { link: "/contact-page", element: <Contact />, id: 8 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}

        {ADMIN_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
