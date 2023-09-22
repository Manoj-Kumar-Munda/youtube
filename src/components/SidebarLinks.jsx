import React from "react";
import { Link } from "react-router-dom";

export const DefaultSidebarLinks = ({
  icon,
  link,
  LG_HIDDEN,
  isDefaultMenuOpen,
}) => {
  return (
    <div
      className={
        LG_HIDDEN
          ? `${isDefaultMenuOpen ? "lg:hidden" : ""}`
          : "lg:w-[calc(100%-24px)"
      }
    >
      <Link className="block hover:bg-gray-200 rounded-xl cursor-pointer" to={"/"}>
        <div
          className={
            isDefaultMenuOpen
              ? "md:px-1 md:py-4 lg:py-2 lg:px-3 lg:min-h-[40px] flex md:flex-col lg:flex-row items-center"
              : "md:px-1 md:py-4 flex md:flex-col items-center"
          }
        >
          <div className={isDefaultMenuOpen ? "w-6 h-6 lg:mr-6" : "w-6 h-6"}>
            <img src={icon} alt="icon" />
          </div>
          <div>
            <span
              className={
                isDefaultMenuOpen ? "lg:text-base text-xs" : "text-[10px]"
              }
            >
              {link}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const MobileSidebarLinks = ({ icon, link }) => {
  return (
    <div id="items" className="">
      <Link className="block hover:bg-gray-200 rounded-xl cursor-pointer" to={"/"}>
        <div className="py-2 px-3 min-h-[40px] flex flex-row items-center">
          <div className="w-6 h-6 mr-6">
            <img src={icon} alt="icon" />
          </div>
          <div>
            <span className="text-base">{link}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const Subscription = ({ channelIcon, channelName }) => {
  return (
    <div className="">
      <div className=" hover:bg-gray-200 rounded-xl cursor-pointer">
        <div className="py-2 px-3 min-h-[40px] flex flex-row items-center">
          <div className="mr-6">
            <img className="w-6 h-6 rounded-full" src={channelIcon} />
          </div>
          <div>
            <span className="text-base  line-clamp-1">{channelName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
