import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { convertToSearchQuery } from "../utils/helperFunction";
import TopicList from "../components/TopicList";
import SearchedVideosContainer from "../components/SearchedVideosContainer";

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const searchQuery = searchParam.get("search_query");
  const isMenuOpen = useSelector((store) => store.app.isDefaultSidebarOpen);
  return (
    <div
      className={`relative lg:py-1 mx-2 px-2 md:ml-20 ${
        isMenuOpen ? "lg:ml-60" : "lg:ml-22"
      }`}
    >
      <div className="flex flex-col max-w-6xl mx-auto">
        <TopicList />
        
        <SearchedVideosContainer searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default SearchPage;
