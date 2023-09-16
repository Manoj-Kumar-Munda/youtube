import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";
import { setIsHomepage } from "../utils/appSlice";
import DefaultSidebar from "../components/DefaultSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const isHomepage = useSelector( store => store.app.isHomepage)
  return (
    <>
      <Header />
      <div className="relative">
        <MobileSidebar />
        {isHomepage && <DefaultSidebar />}

        <Outlet />

        
      </div>
    </>
  );
};

export default Home;
