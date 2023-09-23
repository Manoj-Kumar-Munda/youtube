import React, { useEffect, useState } from "react";
import Search from "../assets/Icons/search.svg";
import Mic from "../assets/Icons/voice-search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { setInputOnFocus } from "../utils/appSlice";
import { setCacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { convertToSearchParams } from "../utils/helperFunction";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const cacheResults = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResults[searchQuery]) {
        setSuggestions(cacheResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      setCacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestionClick = (search_query) => {
    setSearchQuery(() => search_query);
    setShowSuggestion(false);
  };

  const handleOnFocus = () => {
    dispatch(setInputOnFocus(true));
    setShowSuggestion(true);
  };
  const handleOnBlur = () => {
    setTimeout(
      () => setShowSuggestion(false),300
    )
    dispatch(setInputOnFocus(false));
  };

  const handleChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex-1 flex md:justify-center justify-end items-center gap-2 md:gap-4">
      <div
        id="search-bar"
        className="relative w-full max-w-xl border sm:border-gray-300 flex justify-end items-center group focus-within:border focus-within:border-blue-500 rounded-3xl"
      >
        {showSuggestion && (
          <div className="absolute bg-white border top-12 left-0 right-0 rounded-md">
            {suggestions.length === 0 ? (
              searchQuery !== "" && (
                <h1 className="text-center py-2">No result found</h1>
              )
            ) : (
              <ul className="py-3 space-y-1">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="px-2 hover:bg-gray-200"
                    onClick={() => {
                      handleSuggestionClick(item);
                    }}
                  >
                    <a href="#" className="flex space-x-3 items-center">
                      <div className="w-5 h-5">
                        <img
                          src={Search}
                          alt="search-icon"
                          className="w-full h-full"
                        />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button className="px-3 py-2 rounded-l-2xl">
          <div className="w-6 h-6 hidden group-focus-within:block">
            <img src={Search} alt="hamburgur" className="w-full h-full" />
          </div>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="max-w-full w-full border-none outline-none"
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
        />
        <Link
          to={"/search?search_query=" + convertToSearchParams(searchQuery)}
          className="bg-gray-200 border-none px-3 py-2 sm:rounded-r-3xl"
        >
          <div className="w-6 h-6">
            <img src={Search} alt="hamburgur" className="w-full h-full" />
          </div>
        </Link>
      </div>

      <div className="w-10 h-10 p-2 hover:bg-gray-300 rounded-full">
        <button className=" w-6 h-6">
          <img src={Mic} alt="hamburgur" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
