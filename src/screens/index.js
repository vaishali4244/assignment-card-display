import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../components/dashBoard/dashBoard";
import UserDetails from "../components/userDetails/userDetails";

const Screen = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/users" element={<UserDetails />} />
    </Routes>
  );
};

export default Screen;
