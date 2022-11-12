import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Booking from "../Pages/Booking";
import Signup from "../Components/Auth/Signup";
import Login from "../Components/Auth/Login";
import ProductPage from "../Components/ProductPage";
import Cart from "../Pages/Cart";
import Payments from "../Pages/Payments";


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
