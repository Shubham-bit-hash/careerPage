import React from "react";
import Navbar from "./navSection/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footerSection/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
