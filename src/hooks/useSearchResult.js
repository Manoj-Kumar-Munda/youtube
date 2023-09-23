import { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../utils/videosSlice";
import { convertToSearchQuery } from "../utils/helperFunction";

const useSearchResults = (searchQuery) => {
  const [videos,setVideos] = useState([]);
  console.log("useSearch called");
  console.log(searchQuery);
  
  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const query = convertToSearchQuery(searchQuery);
    const data = await fetch(
      YOUTUBE_SEARCH_API +
        query +
        "&regionCode=IN&type=video&key=" +
        API_KEY
    );
    const json = await data.json();
    console.log(json?.items);
    // dispatch(setSearchResults(json?.items));
    setVideos(json?.items);
  };

  return videos;
};

export default useSearchResults;
