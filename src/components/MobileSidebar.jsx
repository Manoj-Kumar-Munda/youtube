import React from "react";
import Hamburgur from "../assets/Icons/hamburger-menu.svg";
import Logo from "../assets/Icons/youtube-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileSidebar } from "../utils/appSlice";
import {
  LG_SIDEBAR_LINKS,
  SM_SIDEBAR_LINKS,
  SUBSCRIPTION_LIST,
} from "../utils/menuItems";
import { MobileSidebarLinks, Subscription } from "./SidebarLinks";

const MobileSidebar = () => {
  const isMobileSidebarOpen = useSelector(
    (store) => store.app.isMobileSidebarOpen
  );
  const isHomePage = useSelector((store) => store.app.isHomepage);
  const dispatch = useDispatch();

  return (
    <>
      {
        <div
          className={`${
            isHomePage ? "lg:hidden" : ""
          } sm-sidebar fixed top-0 bg-white w-60 z-50 ${
            isMobileSidebarOpen ? "active" : ""
          }`}
        >
          <div className="flex items-center py-2 w-full px-2 bg-white">
            <div className="flex justify-between items-center gap-6">
              <div className="w-10 h-10 p-2 hover:bg-gray-300 rounded-full">
                <button
                  className=" w-6 h-6"
                  onClick={() => dispatch(toggleMobileSidebar())}
                >
                  <img
                    src={Hamburgur}
                    alt="hamburgur"
                    className="w-full h-full"
                  />
                </button>
              </div>
              <div className=" w-24">
                <img src={Logo} alt="logo" />
              </div>
            </div>
          </div>

          <div id="sidebar" className="p-3 block h-screen overflow-y-auto ">
            {/* For md-sized devices */}
            <div className="flex flex-col">
              {SM_SIDEBAR_LINKS.slice(0, -1).map((item, index) => (
                <MobileSidebarLinks
                  key={index}
                  icon={item?.icon}
                  link={item?.title}
                />
              ))}
            </div>

            {/* Divider */}

            <div className="h-5 flex items-center">
              <span className="bg-gray-300 border-b w-full"></span>
            </div>

            {/* for lg sized */}
            {/* second list */}

            <div className="flex flex-col">
              {LG_SIDEBAR_LINKS.map((item, index) => (
                <MobileSidebarLinks
                  key={index}
                  icon={item?.icon}
                  link={item?.title}
                />
              ))}
            </div>

            {/* Divider */}
            <div className=" h-5 flex items-center">
              <span className="bg-gray-300 border-b w-full"></span>
            </div>

            {/* Subscriptions */}
            <div className="flex flex-col">
              <div className="px-3">
                <h1>Subscriptions</h1>
              </div>

              {SUBSCRIPTION_LIST.map((item, index) => (
                <Subscription
                  key={index}
                  channelIcon={item?.channelIcon}
                  channelName={item?.channelName}
                />
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default MobileSidebar;
