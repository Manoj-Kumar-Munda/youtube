import { useEffect } from "react";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../utils/videosSlice";

const useSearchResults = (searchQuery) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API +
        searchQuery +
        "&regionCode=IN&type=video&key=" +
        API_KEY
    );
    const json = await data.json();
    // console.log(json?.items);
    dispatch(setSearchResults(json?.items));
  };
};

export default useSearchResults;
