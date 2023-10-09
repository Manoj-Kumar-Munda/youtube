import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";
import DefaultSidebar from "../components/DefaultSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const isHomepage = useSelector((store) => store.app.isHomepage);
  const isMobileSidebarOpen = useSelector(
    (store) => store.app.isMobileSidebarOpen
  );

  

  return (
    <>
      <Header />
      {isMobileSidebarOpen && (
        <div className={`fixed z-50 inset-0 bg-slate-900/70 ${isHomepage && "lg:hidden "}`}></div>
      )}
      <div className="relative">
        <MobileSidebar />
        {isHomepage && <DefaultSidebar />}

        <Outlet />
      </div>
    </>
  );
};

export default Home;
