import React from "react";
import {
  LG_SIDEBAR_LINKS,
  SM_SIDEBAR_LINKS,
  SUBSCRIPTION_LIST,
} from "../utils/menuItems";
import { DefaultSidebarLinks, Subscription } from "./SidebarLinks";
import { useSelector } from "react-redux";

const DefaultSidebar = () => {
  const isDefaultMenuOpen = useSelector(
    (store) => store.app.isDefaultSidebarOpen
  );
  return (
    <>
      <div
        className={`fixed left-0 z-40 ${
          isDefaultMenuOpen ? "md:w-auto lg:w-60 group" : "w-auto bg-white"
        } `}
      >
        <div
          id="sidebar"
          className={`md:px-2 hidden md:block h-screen overflow-y-auto ${
            isDefaultMenuOpen ? "lg:p-3" : ""
          } `}
        >
          {/* For md-sized devices */}
          <div className="flex flex-col">
            {SM_SIDEBAR_LINKS.map((item, index) => (
              <DefaultSidebarLinks
                key={index}
                icon={item?.icon}
                link={item?.title}
                LG_HIDDEN={index === SM_SIDEBAR_LINKS.length - 1 ? true : false}
                isDefaultMenuOpen={isDefaultMenuOpen}
              />
            ))}
          </div>

          {/* Divider */}

          <div
            className={`hidden h-5 ${
              isDefaultMenuOpen ? "hidden lg:flex" : "hidden"
            } items-center`}
          >
            <span className="bg-gray-300 border-b w-full"></span>
          </div>

          {/* for lg sized */}
          {/* second list */}

          <div
            className={`${
              isDefaultMenuOpen ? "hidden lg:flex flex-col" : "hidden"
            } `}
          >
            {LG_SIDEBAR_LINKS.map((item, index) => (
              <DefaultSidebarLinks
                key={index}
                icon={item?.icon}
                link={item?.title}
                LG_HIDDEN={false}
                isDefaultMenuOpen={isDefaultMenuOpen}
              />
            ))}
          </div>

          {/* Divider */}
          <div
            className={
              isDefaultMenuOpen ? "hidden h-5 lg:flex items-center" : "hidden"
            }
          >
            <span className="bg-gray-300 border-b w-full"></span>
          </div>

          {/* Subscriptions */}
          <div
            className={isDefaultMenuOpen ? "hidden lg:block" : "hidden"}
          >
            <div className="px-3 py-1">
              <h1>Subscriptions</h1>
            </div>

            <div className="lg:flex flex-col w-full">
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
      </div>
    </>
  );
};

export default DefaultSidebar;
