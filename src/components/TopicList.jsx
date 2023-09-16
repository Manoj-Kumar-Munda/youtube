import React, { useEffect, useState } from "react";
import { topics } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TopicList = () => {
  const [backBtnVisible, setBackBtnVisible] = useState(false);
  const [forwardBtnVisible, setForwardBtnVisible] = useState(false);

  useEffect(() => handleIcons(0), []);

  const handleIcons = (scrollVal) => {
    const tabBox = document.querySelector("#slider");
    const maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;

    scrollVal <= 0 ? setBackBtnVisible(false) : setBackBtnVisible(true);
    maxScrollableWidth - scrollVal <= 1
      ? setForwardBtnVisible(false)
      : setForwardBtnVisible(true);
  };

  const scrollForward = () => {
    const tabBox = document.querySelector("#slider");
    let scrollVal = (tabBox.scrollLeft += 350);
    handleIcons(scrollVal);
  };

  const scrollBackward = () => {
    const tabBox = document.querySelector("#slider");
    let scrollVal = (tabBox.scrollLeft -= 350);
    handleIcons(scrollVal);
  };

  return (
    <div className="relative flex overflow-hidden rounded-xl my-2">
      {!backBtnVisible ? null : (
        <div className="flex items-center absolute w-14 h-full left-0 bg-gradient-to-r from-white from-70% to-transparent">
          <button
            className=" rounded-full hover:bg-gray-300 w-8 h-8"
            onClick={scrollBackward}
          >
            <span className="block">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          </button>
        </div>
      )}

      {!forwardBtnVisible ? null : (
        <div className="flex items-center justify-end absolute w-14 h-full right-0 bg-gradient-to-l from-white from-70% to-transparent">
          <button
            className="rounded-full hover:bg-gray-300 w-8 h-8 "
            onClick={scrollForward}
          >
            <span className="">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </div>
      )}

      <ul
        id="slider"
        className="list-none flex gap-2 overflow-hidden scroll-smooth"
      >
        {topics.map((item, index) => {
          return (
            <li className="" key={index}>
              <Link className="block py-2  px-4 whitespace-nowrap bg-gray-200 rounded-lg font-normal text-sm">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
