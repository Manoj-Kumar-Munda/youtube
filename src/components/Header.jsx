import React from "react";
import Hamburgur from "../assets/Icons/hamburger-menu.svg";
import Logo from "../assets/Icons/youtube-logo.svg";
import RightHeaderMenu from "./RightHeaderMenu";
import Searchbar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputOnFocus,
  toggleDefaultSidebar,
  toggleMobileSidebar,
} from "../utils/appSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const isInputOnFocus = useSelector((store) => store.app.isInputOnFocus);
  const isHomePage = useSelector((store) => store.app.isHomepage);

  return (
    <header className="sticky flex justify-between items-center gap-2 top-0 py-2 left-0 right-0 md:px-4 px-2 bg-white z-10">
      <div
        id="left-menu"
        className={`flex justify-between items-center gap-3 md:gap-6`}
      >
        {isInputOnFocus ? (
          <>
            <div className="block md:hidden w-10 h-10 p-2 rounded-full hover:bg-gray-300">
              <button
                className="w-6 h-6"
                onClick={() => dispatch(setInputOnFocus(false))}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>

            {/* For screen > md logo will be visible on inputFocus */}

            <div
              className={`hidden md:flex justify-between items-center gap-3 md:gap-6`}
            >
              <div className="w-10 h-10 p-2 hover:bg-gray-300 rounded-full">
                {isHomePage ? (
                  <button
                    className="hidden lg:block w-6 h-6"
                    onClick={() => dispatch(toggleDefaultSidebar())}
                  >
                    <img
                      src={Hamburgur}
                      alt="hamburgur"
                      className="w-full h-full"
                    />
                  </button>
                ) : (
                  <button
                    className="hidden lg:block w-6 h-6"
                    onClick={() => dispatch(toggleMobileSidebar())}
                  >
                    <img
                      src={Hamburgur}
                      alt="hamburgur"
                      className="w-full h-full"
                    />
                  </button>
                )}

                <button
                  className="lg:hidden w-6 h-6"
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
                <img src={Logo} alt="logo" className="w-full h-full" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-10 h-10 p-2 hover:bg-gray-300 rounded-full">
              {isHomePage ? (
                <button
                  className="hidden lg:block w-6 h-6"
                  onClick={() => dispatch(toggleDefaultSidebar())}
                >
                  <img
                    src={Hamburgur}
                    alt="hamburgur"
                    className="w-full h-full"
                  />
                </button>
              ) : (
                <button
                  className="hidden lg:block w-6 h-6"
                  onClick={() => dispatch(toggleMobileSidebar())}
                >
                  <img
                    src={Hamburgur}
                    alt="hamburgur"
                    className="w-full h-full"
                  />
                </button>
              )}

              <button
                className="lg:hidden w-6 h-6"
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
              <Link to={"/"}>
                <img src={Logo} alt="logo" className="w-full h-full" />
              </Link>
            </div>
          </>
        )}
      </div>

      <Searchbar />

      {/* RightMenu */}
      <RightHeaderMenu />
    </header>
  );
};

export default Header;
