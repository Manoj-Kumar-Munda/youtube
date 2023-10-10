import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return videos;
};

export default useFetchVideos;
