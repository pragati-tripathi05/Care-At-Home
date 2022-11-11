import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Booking from "../Pages/Booking";
import Signup from "../Components/Auth/Signup";
import Login from "../Components/Auth/Login";
import ProductPage from "../Components/ProductPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
