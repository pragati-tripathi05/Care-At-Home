import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Signup from "../Components/Auth/Signup";
import Login from "../Components/Auth/Login";
import ProductPage from "../Components/ProductPage";
import Cart from "../Pages/Cart";
import Payments from "../Pages/Payments";
import { PrivatRoute } from "./PrivateRoute";
import BookingList from "../Components/BookingList";
import BookingDetails from "../Components/BookingDetails";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingList />} />
        <Route path="/bookingdetails" element={<BookingDetails/>} />
        <Route
          path="/cart"
          element={
            <PrivatRoute>
              <Cart />
            </PrivatRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <PrivatRoute>
              <Payments />
            </PrivatRoute>
          }
        />
        <Route
          path="/salon"
          element={
            <ProductPage
              url="https://care-at-home.onrender.com/salon"
              heading="Salon Prime"
              rating="4.76 (978K)"
            />
          }
        />
        <Route
          path="/mensalon"
          element={
            <ProductPage
              url="https://care-at-home.onrender.com/mensalon"
              heading="Salon for Men"
              rating="4.76 (978K)"
            />
          }
        />
        <Route
          path="/mentherapies"
          element={
            <ProductPage
              url="https://care-at-home.onrender.com/mentherapies"
              heading="Massage for Men"
              rating="4.85 (156K)"
            />
          }
        />
        <Route
          path="/womentherapies"
          element={
            <ProductPage
              url="https://care-at-home.onrender.com/womentherapies"
              heading="Spa for Women"
              rating="4.81 (189K)"
            />
          }
        />
        <Route
          path="/womenhair"
          element={
            <ProductPage
              url="https://care-at-home.onrender.com/womenhair"
              heading="Hair Studio for Women"
              rating="4.78 (26K)"
            />
          }
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
