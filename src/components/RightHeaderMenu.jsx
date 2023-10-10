import React from 'react';
import  Upload  from "../assets/Icons/upload.svg";
import Notifications  from "../assets/Icons/notifications.svg";
import Profile from "../assets/Icons/profile-icon.png";
import { Link } from 'react-router-dom';

const RightHeaderMenu = () => {
  return (
    <div
        id="right-menu"
        className="hidden md:flex justify-between items-center gap-2 md:gap-6 px-2"
      >
        <div className="w-10 h-10 p-2 hover:bg-gray-300 rounded-full">
          <button className=" w-6 h-6">
          <img src={Upload} alt="hamburgur" className="w-full h-full" />
          </button>
        </div>

        <div className="w-10 h-10 p-2 hover:bg-gray-300 rounded-full">
          <button className=" w-6 h-6">
          <img src={Notifications} alt="hamburgur" className="w-full h-full" />
          </button>
        </div>

        <div className="">
          <button className="w-9 h-9">
            <Link to={"https://github.com/Manoj-Kumar-Munda/youtube"}>
            <img src={Profile} className="w-full h-full rounded-full" title='Github' />
            </Link>
          </button>
        </div>
      </div>
  )
}

export default RightHeaderMenu